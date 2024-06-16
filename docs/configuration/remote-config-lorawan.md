---
sidebar_position: 4
---

# Remote Config (LoRaWAN)

This article describes the technical details how to remotely configure Lobaro devices that are using **LoRaWAN** as
upload technology.

IoT devices are often installed at places that are difficult to reach. If you need to change the settings of such a
device it is often not easily possible to get physical access to attach a config adapter.

Many of our devices support LoRaWAN remote configuration that allows you to change the configuration of the device by
sending downlink messages.

:::note
If you are using cellular IoT (NB-IoT, LTE-M) as communication technology any configuration updates are done in a
different way.
:::

## Protocol Description

Lobaro LoRaWAN devices receive remote configuration commands as Downlinks on port 128. Responses to those commands will
be sent as Uplinks on `Port 128` (and 129-131 for long responses). **The remote commands and their responses are all
encoded in ASCII**, to make it easier for humans to use them. The ASCII string must be converted to hex or Base64
payload bytes, depending on the used LoRaWAN network server.

The first byte of a Downlink message on `Port 128` contains a single character that identifies the command you want to
send. Some commands take a parameter following the command char.

The responses to a command start with the same character as the command followed by an optional parameter. If a command
is unknown, or it fails for some reason, an error response is sent via Uplink that contains with a ! followed by a
readable error message.

Changing configuration does nothing until you save the changes and reboot the device. The device has a safety feature
that prevents configurations that make the device unusable. A new configuration is tested in the first run after
rebooting. Only after the device reaches a stable state will the configuration be adopted and used permanently. If a
problem occurs the device will restore its last stable connection and reboot. If the device uses OTAA (which we
recommend) the device will only adopt the new configuration only after a join request is accepted, to make sure the
LoRaWAN parameters are correct. After a few failed attempts it will restore the previous configuration. This can take up
to about 10 minutes.

:::info
Downlinks should only be used to a limited extent depending on the infrastructure. In the free version of TTN, the Fair
use policy says, that no more than 10 downlinks should be made. You also have to observe the regulations within the
Limit of the duty cycle limitation. That is why downlinks are only to be carried out with caution and when absolutely
necessary. The number of possible characters that can be sent is limited by the respective spreading factor (With a SF
of 12 only 51 characters).
:::

### Downlink Commands (Port 128)

Configurations are normally communicated as downlinks and uplinks (responses) on `Port 128`. For longer responses, that
don't can be send as single uplink on `Port 128`, the `Ports 129-131` are used. The first response part is sent
on `Port 129`, the middle parts (if exist) on `Port 130` and the last part on `Port 131`. A stateful parser can
concatenate long responses based on Port and FCnt.

| Char | Command                                      | Parameter           | HEX | Info                         |
|------|----------------------------------------------|---------------------|-----|------------------------------|
| ?    | Request firmware and version                 | `None             ` | 3F  |                              |
| a    | Append to config parameter val               | `<name>=<value>   ` | 61  |                              |
| b    | Reboot device without saving                 | `None             ` | 62  |                              |
| g    | Get config parameter value                   | `Name of parameter` | 67  |                              |
| r    | Reset config parameter value                 | `Name of parameter` | 72  |                              |
| s    | Set config parameter value                   | `<name>=<value>   ` | 73  |                              |
| S    | Set config parameter value & Save and reboot | `<name>=<value>   ` | 53  | Not supported on all devices |
| w    | Save config and reboot device                | `None             ` | 77  |                              |

:::warning
Depending on the firmware version not all commands might be supported on all devices.
Please refer to the manual of your product for more details.
:::

#### `?`

Request firmware and version. This command triggers the device to send what firmware it is running and in which version.
This can be used to test if the remote configuration is working.

#### `g<name>`

Get the value of the config parameter `<name>`. This command makes the device sent a response
containing `<name>=<value>` as
parameter giving you the current value of a configuration parameter.

#### `r<name> / r*`

Reset config parameter `<name>` to its default value. As a confirmation the device sends a response
containing `<name>=<value>`, reporting the new value of the parameter.Sending the special value * will reset all config
parameters.

#### `s<name>=<value>`

Set config parameter `<name>` to `<value>`. Sets the parameter to the value given in the parameter. As a confirmation it
sends a response containing `<name>=<value>`, reporting the new value of the parameter.

#### `a<name>=<value>`

Append `<value>` to the config parameter `<name>`. This command appends the value given to the current value of the
parameter. This is intended to allow setting values that are too long for a single Downlink message. As a confirmation
it sends the length of the config parameter's value after the appending. Append works for config parameters of type
string.

#### `b`

Reboot device without saving. This command restarts the device. Any changes too the config that have been committed
before will be lost! This command does not send a Response.

#### `w or wFORCE`

Save config and reboot device. This command saves all configuration changes to a temporarily configuration and restarts
the device. Only if the device boots successfully and reaches normal operation mode is the new configuration made
permanent. If any fatal configuration error occurs or if the LoRaWAN OTAA Join does not succeed, the previous
configuration will be restored and the device restarted again. This command does not send a Response.If you add the
special argument FORCE to the command, the configuration will be made permanent without testing the configuration.

:::danger
Using **wFORCE** can leave your device useless and unreachable!

Do not use **wFORCE** unless you have a very good reason. If the device is set to an invalid configuration it will no
longer
be reachable by the Network Server. From such a state it can only be recovered with physical access and a config
adapter. It will also most likely drain the battery quickly.
:::

:::warning
For commands `s`, `S` and `a` make sure the number of characters to send matches with the possibilities your devices
spreading factor:

* SF 7 = 242 bytes max. LoRaWAN downlink payload
* SF 12 = 51 bytes max. LoRaWAN downlink payload

Consider splitting bigger configuration changed in multiple smaller downlinks.
:::

## Examples

### Changing device configuration

The following is a short example of how you can update two configuration values remotely (that includes rebooting the
device).

Most LoRaWAN devices (all that are running in Class A, which are by fast the most) can only be reached when they contact
the network. Network Servers (like The Things Network) provide a mechanism to enqueue messages for a specific device.
The messages will be sent as downlink the next time that device contacts the network. Normally, multiple messages can be
enqueued and will all be transmitted as soon as possible. Please be advised that the gateways communicating with your
device must respect their duty cycle, so there is a very limited amount of downlinks that can be sent for a given time (
downlinks are expensive).

For this example we want to set Time Synchronization to sync the internal clock every 10 days, and we want to deactivate
Adaptive Date Rate (ADR). These are both LoRaWAN configuration parameters that are present on most devices (find details
under LoRaWAN Configuration), but you can of course also change parameters specific to your device, e.g. Modbus
configuration or wMBus configuration, with this feature.

We will need to send three commands:

* **s**TimeSync=10
    * set time synchronization to 10 day interval
* **s**ADR=false
    * disable adaptive data rate
* **w**
    * write changes to device configuration and reboot

The actual s-commands will of course differ for your case, but the w command at the end **must** always be the same.

After sending the final command, the device will reboot and try the new configuration. If the boot process and the
connection to the network are successful, the device will make the changes permanent. If there is a problem (if you
accidentally set an invalid value, e.g. sADR=flase or if you changed your AppKey to wrong value and your OTAA fails),
the device will revert to the previous configuration.

#### Downlink on TTN

How you sent your downlinks depends on the LoRaWAN Network Server you use to connect your devices. You will most likely
need to convert the commands (that are all ASCII) to some different representation, e.g. Hex or Base64.

In The Things Network you find the downlink panel on the "Device Overview" page for each device, directly below the
panel that shows you OTAA/ABP information (DevEUI, AppKey, ...). It is shown in the following screenshot.

<Image alt='TTN LoRaWAN downlink configuration'
img={require('./img/ttn-downlink.png')}
style={{width:'60%',paddingTop:'5px',paddingBottom:'5px'}} />

You will have to encode the commands in hex. In the screenshot you see `73 54 69 6d 65 53 79 6e 63 3d 31 30` as the
message to send; that is the hex representation of `sTimeSync=10`. The Port used for remote configuration for our
devices
is 128. When you enter multiple messages to send, be sure to set the correct scheduling (last). The preselected replace
will overwrite your previously enqueued messages.

### Getting the firmware version

For this example the "Request firmware and version" `?` (0x3F) command has to used. We use TTN as network server.

#### Downlink on TTN

<Image alt='TTN LoRaWAN downlink get firmware version'
img={require('./img/Downlink-TTN-get-fw.png')}
style={{width:'50%',paddingTop:'5px',paddingBottom:'5px'}} />

Will result in:

<Image alt='TTN LoRaWAN downlink get firmware version'
img={require('./img/lorawan-downlink-3F-downlink.png')}
style={{width:'50%',paddingTop:'5px',paddingBottom:'5px'}} />

#### Uplink on TTN

The device answers with this uplink:

<Image alt='TTN LoRaWAN uplink get firmware version'
img={require('./img/lorawan-downlink-3F-answer.png')}
style={{width:'95%',paddingTop:'5px',paddingBottom:'5px'}} />

This response can be converted to ASCII again, e.g. using
any [online converter](https://www.rapidtables.com/convert/number/hex-to-ascii.html):

<Image alt='TTN LoRaWAN uplink to ascii conversion get firmware version'
img={require('./img/3F-result-in-ascii.png')}
style={{width:'30%',paddingTop:'5px',paddingBottom:'5px'}} />

The result is: `?app-hybrid-modbus v0.4.0+battery`

### Configure a device via script

#### Example configuration command to be send

Example command (ASCII encoding):  
`SMbCmd=0 0/10 * * * *:R,9600,8N1:010300160002,010300260002,fa0400050001`

:::warning
For commands `s`, `S` and `a` make sure the number of characters to send matches with the possibilities your devices
spreading factor:

* SF 7 = 242 bytes max. LoRaWAN downlink payload
* SF 12 = 51 bytes max. LoRaWAN downlink payload

Consider splitting bigger configuration changed in multiple smaller downlinks.
:::

Example command (Base64 encoding):  
`U01iQ21kPTAgMC8xMCAqICogKiAqOlIsOTYwMCw4TjE6MDEwMzAwMTYwMDAyLDAxMDMwMDI2MDAwMixmYTA0MDAwNTAwMDE=`

#### Curl Script for TTN

Curl script to be used with TTN:

```shell
curl --location \ --header 'Authorization: Bearer NNSXS.XJAZK3VF3YBMXX_API_KEY_KR2HFG6ABXXXXXX.CP4WZUOXXXXXXXB5WW4UUSMNXRLUJ7LVO2U' \
--header 'Content-Type: application/json' \
--header 'User-Agent: my-integration/my-integration-version' \
--request POST \ --data '{"downlinks":[{ "frm_payload":
"U01iQ21kPTAgMC8xMCAqICogKiAqOlIsOTYwMCw4TjE6MDEwMzAwMTYwMDAyLDAxMDMwMDI2MDAwMixmYTA0MDAwNTAwMDE=",
"f_port":128 }] }' \
'https://eu1.cloud.thethings.network/api/v3/as/applications/your-ttn-applicationID/devices/eui-your_TTN_end_deviceID/down/push'
```

See also:  https://www.thethingsindustries.com/docs/integrations/webhooks/scheduling-downlinks/
:::tip
You should use your own data for the API KEY, your-ttn-applicationID and your your_TTN_end_deviceID
:::

#### Chirpstack V3

Curl script to be used with Chirpstack V3:

```shell
curl -X POST --header 'Content-Type: application/json'
--header 'Accept: application/json'
--header 'Grpc-Metadata-Authorization:
Bearer xxxxxxxxx_API_KEY_xxxxxxx' -d
'{ "deviceQueueItem": { "confirmed": false, "data":
"U01iQ21kPTAgMC8xMCAqICogKiAqOlIsOTYwMCw4TjE6MDEwMzAwMTYwMDAyLDAxMDMwMDI2MDAwMixmYTA0MDAwNTAwMDE=",
"fPort": 128
 } }'
'http://192.198.0.101:8080/api/devices/ChirpStack_DevEUI/queue'
```

:::tip
You should use your own data for the API KEY, your Chirpstack_IP_Adress and your your_ChirpStack_DevEUI
:::

#### Chirpstack V4

The actual API has now switched from the Swagger API with UI to gRPC integration, but for compatibility and transition
reasons the chirpstack-rest-api can be installed as an additional component. However, experience has shown that there
are changes that need to be considered. "deviceQueueItem" became ""queueItem" and by default the API can now be reached
on port 8090 and no longer 8080.

Curl script to be used with Chirpstack V4:

```shell
curl -X POST --header 'Content-Type: application/json'
--header 'Accept: application/json'
--header 'Grpc-Metadata-Authorization:
Bearer xxxxxxxxx_API_KEY_xxxxxxx' -d
'{ "queueItem": { "confirmed": false, "data":
"U01iQ21kPTAgMC8xMCAqICogKiAqOlIsOTYwMCw4TjE6MDEwMzAwMTYwMDAyLDAxMDMwMDI2MDAwMixmYTA0MDAwNTAwMDE=",
"fPort": 128
 } }'
'http://192.198.0.101:8090/api/devices/ChirpStack_DevEUI/queue'
```