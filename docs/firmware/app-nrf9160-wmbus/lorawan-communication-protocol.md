---
sidebar_position: 5
displayed_sidebar: firmwareSidebar
title: LoRaWAN Communication
---

# LoRaWAN Communication

The Gateway can use LoRaWAN as Uplink technology for forwarding received wMbus telegrams to any network server.

:::note
It is **not** a LoRaWAN Gateway, thus other LoRaWAN Devices can not be received.
:::

## Uplink Payload Formats

After collecting wireless M-Bus telegrams over the air, the Bridge starts uploading data via LoRaWAN. There exist two
data formats that are transmitted over different LoRaWAN ports. As LoRaWAN can only transmit very short messages, the
message formats contain only data bytes. The meaning of a byte is determined by its position within a message. The
following describes the package formats used by the wireless M-Bus Bridge.

M-Bus telegrams can be longer as the maximal size of a LoRaWAN-Message. For this cases, the firmware needs to split a
telegram into multiple pieces and upload it using multiple LoRaWAN-Messages. There are two different methods this is
done, according to the payload pormat you set in the [firmware configuration](configuration-parameter.md#lorawanparams).

A configuration with `PayloadFormat = 0` is focused on easy reassembly of the pieces. The parts are encoded by port
numbers and the data can
just be concatenated together. Payload Formats 1 and 2 add additional information to the telegram. They focus on putting
as much of a telegram in a single LoRaWAN-Message as possible with respecting the current Spreading Factor.

| LoRaWAN Port | `PayloadFormat` Configuration | Uplink Message                                                                                      |
|:------------:|-------------------------------|-----------------------------------------------------------------------------------------------------|
|      1       | `any`                         | Status Message                                                                                      |
|    11-99     | `0`                           | Default PayloadFormat. Part of split telegrams is encoded in Port (e.g. Port 24 = Telegram 2 of 4). |
|     101      | `1`                           | Data Message with timestamp and without RSSI. Part of split telegrams is encoded in payload.        |
|     102      | `2`                           | Data Message with timestamp and with RSSI. Part of split telegrams is encoded in payload.           |

### Status Packet (Port 1)

In order to provide some information about the health & connectivity state of the device itself, the device
sends a status update at a daily basis. The status packet is sent on the first upload phase after activation of the
device (after reboot) and then repeatedly in every upload phase that takes place a day or longer after the previous
status packet. It has a length of 7 or 8 bytes. The battery voltages and ambient temperature are encodes as 16 bit
integer using **little endian encoding**.

| Field   | Type     | Bytes | Description           | Example          |
|---------|----------|-------|-----------------------|------------------|
| version | uint8[3] | 0-2   | Firmware Version      | 1, 5, 1 ≡ v1.5.1 |
| v_bat   | uint16   | 3-4   | Battery Voltage [mV]  | 2947 ≡ 2.947V    |
| temp    | int16    | 5-6   | Temperature [1/10 °C] | 246  ≡ 24.6°C    |
| flag    | int8     | 7     | Internal Flag         | 0x01             |

### Data Packet (PayloadFormat 0)

After each wMBUS collecting phase, all saved telegrams will be uploaded via LoRaWAN uplink
messages as fast as possible. The received wMBUS telegrams that did pass the configured filters will be
uploaded without any modification in one or more LoRaWAN messages.

If a wMBUS telegram is bigger than the bridge
configuration parameter loraMaxMsgSize the transmission will be done using multiple LoRaWAN messages. This parameter is
limited to ≤ 50 bytes due to LoRaWANs maximum payload size restrictions. In case of telegram splitting is needed the
receiving backend application server as to reassemble the original wMBUS telegram before decryption & parsing of the
meter data. This is done by simply joining the messages together in the order of receive. The LoRaWAN port encodes
identifies a LoRaWAN fragment of the original wireless M-Bus telegram. This way partial messages can be identified using
the LoRaWAN Port:

* 10 < LoRaWAN Port < 100 ≡ (Part Number | Total Parts)

Gaps in the LoRaWAN Frame Counter are giving a hint for missing telegram parts which can happen in LoRaWAN since it's a
ALOHA based protocol, e.g. collisions and some packet losses are accepted by principle of operation. In case the backend
noticed a missing packet the wMBUS telegram can't be assembled anymore as described before.

#### Examples

With a configuration of `loraMaxMsgSize` = 50:

##### Length 48 Byte wMBUS telegram

Will be send on LoRaWAN port 11. Port 11 says it is the first message of only one message (no splitting).

##### Length 75 byte wMBUS telegram

Will be send in two messages on LoRaWAN ports 12 and 22. Port 12 means this part one of a wMBUS telegram that got
splitted into two LoRaWAN messages. Port 22 means that this data is the 2nd part of the original wMBUS data. Both parts
have to been concatenated in the order of receive by the backend.

##### Length 101 byte wMBUS telegram

Will be send in three messages on LoRaWAN ports 13, 23 and 33. Port 13 means this part one of a wMBUS telegram that got
splitted into three LoRaWAN messages. Port 23 means that this data is the 2nd part of the original wMBUS data. Port 33
means that this data is the 3rd part of the original wMBUS data. All three parts have to been concatenated in the order
of receive by the backend.

### Data Packet (PayloadFormat 1)

When using Payload Format 1, collected telegrams are uploaded on a single Port: 101. For each telegram there will be
added the timestamp of reception. The first byte of messages on Port 101 encodes splitting of messages as follows.

Every Uplink on Port 101 is prefixed with a single byte, where the least significant Bit indicates if that Uplink is the
first part of a message, and the second least significant Bit indicates if that Uplink is the last part or a message. So
there are 4 different possible values for the **first Byte** of an Uplink on Port 101:

* 0x03:
    * This Uplink is both first and final part of a message. So the remaining Bytes in this Uplink contain the whole
      message.
* 0x02:
    * This Uplink is the last but not the first part of a message. There has been at least one Uplink before this one,
      that contained data that needs to be prepended to the current Uplink in order to get the full Message
* 0x01:
    * This Uplink is the first but not the last part of a message. There follows at least one Uplink that contains more
      data to be appended to the current's data in order to get the full message.
* 0x00:
    * This Uplink is neither first nor last part of a message. There has been at least one Uplink before this one that
      contains more data of the current Message, and there follows at least one more Uplink with data for this Message.

So each message sent on Port 101, whether it is contained in a single Uplink or spread over multiple ones, starts with
an Uplink where the least significant Bit of the first Byte is set. Each Message ends with an Uplink where the second
least significant Bit of the first Byte is set. In cases where the Message fits in a single Uplink, that Uplink is both
first and last Uplink, and therefore both Bits are set.

The combination of those two Bits and the Frame Counter of the Uplinks makes it possible to upload Messages of any
length while allowing the receiving side to now exactly, if a Message has been transferred completely, or if part of it
is missing (when there are Frame Counter values missing).

The Bridge puts as many Bytes in each Uplink as possible for the current Spreading Factor, even if the Spreading Factor
changes between Uplinks because of ADR.

When the data of all Uplinks that are part of a single Message are appended in order of reception (after removing the
first Byte of each Uplink), you get the payload Data of a full message.