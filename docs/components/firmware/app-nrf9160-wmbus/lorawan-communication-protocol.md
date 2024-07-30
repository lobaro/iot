---
sidebar_position: 5
#displayed_sidebar: componentsSidebar
title: LoRaWAN Communication
---

# LoRaWAN Communication

The Gateway can use LoRaWAN as Uplink technology for forwarding received wireless M-BUS telegrams to any network server.

:::note[common misunderstanding]
Products based on this firmware are **not** LoRaWAN Gateways. Thus, other LoRaWAN Devices / Sensors can not be received.
In fact the firmware acts itself as LoRaWAN node and **needs** an external LoRaWAN network which consists of one are
more LoRaWAN Gateways.
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

When using Payload Format 1, collected telegrams are uploaded on single port 101 **without RSSI** (of received wmbus
telegram) information. For each telegram there will be
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
length while allowing the receiving side to know exactly if a Message has been transferred completely, or if part of it
is missing (when there are Frame Counter values missing).

The Bridge puts as many Bytes in each Uplink as possible for the current Spreading Factor, even if the Spreading Factor
changes between Uplinks because of ADR.

When the data of all Uplinks that are part of a single Message are appended in order of reception (after removing the
first Byte of each Uplink), you get the payload Data of a full message.

The Payload Data after reassembly of the split parts consists of a 5 Byte Timestamp, that marks the point in time the
Bridge did receive that telegram, followed by the Data of the Telegram. The Timestamp follows the convention of all our
40bit-Timestamps; you can find the details under Timestamp in our LoRaWAN Background Information.

### Data Packet (PayloadFormat 2)

Upload Format 2 works like Upload Format 1, with the same logic for splitting messages, but uploads are sent on port

102. The Payload consists of a 5 Byte Timestamp marking the time of reception, followed by a uint_8 that holds the (
     negated) RSSI value for that reception, followed by the data of the Telegram.

### Examples

For easier understanding, the wMBus-Telegram in the examples will always be `0102030405060708090a0b0c0d0e0f` (15 Byte).

#### PayloadFormat 1

```graphql title="A message sent in a single Uplink"
# An Uplink of 21 Bytes on Port 101:
'03005e53f31a0102030405060708090a0b0c0d0e0f'
# Analised:
'03' -> First and Last Uplink of Message -> complete Message in this Uplink
'005e53f31a' -> Unix Timestamp 1582560026 -> 2020-02-24T16:00:26 UTC
'0102030405060708090a0b0c0d0e0f' -> wMBus Telegram
```

```graphql title="A message split over two Uplinks"
# An Uplink of 11 Bytes on Port 101, Frame Counter 341:
'01005e53f31a0102030405'
'01' -> First Uplink of Message, more Uplinks follow
'05e53f31a0102030405' -> First Part of Message Data.
# Another Uplink of 11 Bytes on Port 101, Frame Counter 342:
'02060708090a0b0c0d0e0f'
'02' -> Last (but not first) Uplink of Message.
'060708090a0b0c0d0e0f' -> Second and final Part of Message Data.
# We Received a 'first' Part with Frame Counter 341 and a 'last'
# Part with Frame Counter 342, so we know we did not miss any
# Parts in between. We can now assembly the complete payload:
'05e53f31a0102030405060708090a0b0c0d0e0f'
# Payload anaylsed:
'005e53f31a' -> Unix Timestamp 1582560026 -> 2020-02-24T16:00:26 UTC
'0102030405060708090a0b0c0d0e0f' -> wMBus Telegram
```

```graphql title="A message split over three Uplinks"
# An Uplink of 8 Bytes on Port 101, Frame Counter 519:
'01005e53f31a0102'
'01' -> First Uplink of Message, more Uplinks follow
'05e53f31a0102' -> First Part of Message Data.
# Another Uplink of 8 Bytes on Port 101, Frame Counter 520:
'0003040506070809'
'00' -> Middle Part of Message, there have been some Parts already, more Uplinks follow
'03040506070809' -> Second Part of Message Data.
# Another Uplink of 7 Bytes on Port 101, Frame Counter 521:
'020a0b0c0d0e0f'
'02' -> Last (but not first) Uplink of Message.
'0a0b0c0d0e0f' -> Third and final Part of Message Data.
# Frame Counters are consecuetive, so the complete Message is:
'05e53f31a0102030405060708090a0b0c0d0e0f'
```

```graphql title="Uplinks with a missing a Part""
# An Uplink of 8 Bytes on Port 101, Frame Counter 123:
'01005e53f31a0102'
'01' -> First Uplink of Message, more Uplinks follow
'05e53f31a0102' -> First Part of Message Data.
# Another Uplink of 7 Bytes on Port 101, Frame Counter 125:
'020a0b0c0d0e0f'
'02' -> Last (but not first) Uplink of Message.
'0a0b0c0d0e0f' -> Third and final Part of Message Data.
# Frame Counter indicates, that a Part in the middle is missing,
# so we have to drop the Message.
```

#### PayloadFormat 2

```graphql title="A message sent in a single Uplink"
# An Uplink of 8 Bytes on Port 101, Frame Counter 123:
'01005e53f31a0102'
'01' -> First Uplink of Message, more Uplinks follow
'05e53f31a0102' -> First Part of Message Data.
# Another Uplink of 7 Bytes on Port 101, Frame Counter 125:
'020a0b0c0d0e0f'
'02' -> Last (but not first) Uplink of Message.
'0a0b0c0d0e0f' -> Third and final Part of Message Data.
# Frame Counter indicates, that a Part in the middle is missing,
# so we have to drop the Message.
```

## Upload Speed / Duration

The firmware has to work in compliance with the European SRD 868 1% duty-cycle regulations. This implies as a rule of
thumb the device can upload at most wireless M-BUS telegrams via LoRaWAN for 36 seconds every hour.

The actual transmit time ('ToA: time on air') for each LoRaWAN message depends on the byte size and the used LoRa
spreading factor (SF) which defines how redundant LoRa data is send. This means a device with good connectivity and
consequently using LoRa SF7 (ToA ≤ 0,050s) can upload much faster more data than a node using LoRa SF11 (ToA ≥ 1s) due
to a hard to reach LoRaWAN gateway. The bridge will upload in conformity with the regulations automatically as fast as
possible. When it has to wait it enters a low power sleep mode until the next transmission is possible again. The next
data collection phase will be started only after completion of the previous upload phase in respect to the configured
listenCron parameter. Because of this it is advisable to define the cron parameter with an estimation of the upload
duration in mind. This will avoid unexpected 'skipping' of data collection phases.

## Downlink Payload Formats

### LoRaWAN Downlink Ports

| Port | Message                   |
|------|---------------------------|
| 128  | Remote Confiuration       |
| 132  | Firmware Control Commands |

### Remote Configuration

The remote configuration follows the general [Lobaro protocol](configuration/lorawan-downlink-config.md) for over the
air configuration using LoRaWAN.

:::tip[in depth description]
[Read more](configuration/lorawan-downlink-config.md) about LoRaWAN based downlink configuration.
:::

### Firmware Control Commands

| Port | Action         | DL Payload (ASCII) | DL Payload (Hex) | DL Payload (Base64) |
|------|----------------|--------------------|------------------|---------------------|
| 132  | Ad-hoc-readout | `read`             | `72656164`       | `cmVhZA`==          |

#### Ad-hoc-readout

A downlink that triggers an Ad hoc readout, independent of CRON triggers. The Ad-hoc readout is using the same
parameters (filters and listening duration) as a CRON triggered readout.

## Decoding wMBUS telegrams{#decodewmbus}

After receiving and reassemble the raw wireless M-Bus telegrams from your LoRaWAN network provider the actual metering data has to be
decrypted and decoded by a backend service for further processing. The details of this are described in the EN 13757
norm and the newer OMS specification, which is a clarification of the original underlying norm.

A universal wireless M-Bus decoder is a relatively complicated piece of software if you start implementing it from
scratch since the norm covers many different use cases, units, meter types and data formats. If you know in advance the
exact telegram format of the deployed meters in your setup a hard coded data decoding may be a feasible approach. This
is because wireless M-Bus devices often send the same telegram format in every transmission. Please contact the
manufacturer of your meters for the needed telegram format details.

:::tip[Lobaro wireless M-BUS parser]
An an alternative to support a quick evaluation of our hardware Lobaro offers a easy to use
webservice ([mbus.org](https://www.mbus.org)) which is designed
to decode all sorts of wMBUS input data including decryption if the correct key has been provided. You can access the
decoder service for free during testing. The API can be licensed for production usages.

Since wireless MBUS is a complex and grown specification some meters may fail to decode correctly. We try to fix any
decoding issues as quickly as possible if you report us problems with your specific wMBUS device.
:::

## Example JS parser

This parser may be used to decode the status message of this firmware send over LoRaWAN. For decoding wireless M-BUS telegram data see
the above [documentation](#decodewmbus) about this topic.

```tsx title="Status message LoRaWAN parser (Java-Script)"
function readVersion(bytes, i) {
    if (bytes.length < 3) {
        return null;
    }
    return "v" + bytes[i] + "." + bytes[i + 1] + "." + bytes[i + 2];
}

function parse_sint16(bytes, idx) {
    bytes = bytes.slice(idx || 0);
    var t = bytes[0] << 8 | bytes[1] << 0;
    if ((t & 1 << 15) > 0) { // temp is negative (16bit 2's complement)
        t = ((~t) & 0xffff) + 1; // invert 16bits & add 1 => now positive value
        t = t * -1;
    }
    return t;
}

function Decoder(bytes, port) {
    // Decode an uplink message from a buffer
    // (array) of bytes to an object of fields.
    var decoded = {};

    if (port === 9) {
        decoded.devStatus = bytes[0];
        decoded.devID = bytes[1] | bytes[2] << 8 | bytes[3] << 16 | bytes[4] << 24;
        decoded.dif = bytes[5];
        decoded.vif = bytes[6];
        decoded.data0 = bytes[7];
        decoded.data1 = bytes[8];
        decoded.data2 = bytes[9];
    }

    // example decoder for status packet by lobaro
    if (port === 1 && bytes.length == 9) { // status packet - old
        decoded.FirmwareVersion = String.fromCharCode.apply(null, bytes.slice(0, 5)); // byte 0-4
        decoded.Vbat = (bytes[5] | bytes[6] << 8) / 1000.0; // byte 6-7 (originally in mV)
        decoded.Temp = parse_sint16(bytes, 7) / 10.0; // byte 8-9 (originally in 10th degree C)
        decoded.msg = "Firmware Version: v" + decoded.FirmwareVersion + " Battery: " + decoded.Vbat + "V Temperature: " + decoded.Temp + "°C";
    } else if (port === 1 && bytes.length >= 7) {
        decoded.FirmwareVersion = readVersion(bytes, 0); // byte 0-2
        decoded.Vbat = (bytes[3] | bytes[4] << 8) / 1000.0; // originally in mV
        decoded.Temp = parse_sint16(bytes, 5) / 10.0; // byte 8-9 (originally in 10th degree C)
        decoded.msg = "Firmware Version: " + decoded.FirmwareVersion + " Battery: " + decoded.Vbat + "V Temperature: " + decoded.Temp + "°C";
        if (bytes.length == 8) { // added in v2.5.0
            decoded.Flags = bytes[7];
        }
    }


    return decoded;
}

// Wrapper for Lobaro Platform
function Parse(input) {
    // Decode an incoming message to an object of fields.
    var b = bytes(atob(input.data));
    var decoded = Decoder(b, input.fPort);

    return decoded;
}

// Wrapper for Loraserver / ChirpStack
function Decode(fPort, bytes) {
    return Decoder(bytes, fPort);
}

// Wrapper for Digimondo niota.io
// Uncomment only when used in niota!
/*
module.exports = function (payload, meta) {
    const port = meta.lora.fport;
    const buf = Buffer.from(payload, 'hex');
   
    return Decoder(buf, port);
}*/
```