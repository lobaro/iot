---
sidebar_position: 1
displayed_sidebar: firmwareSidebar
title: Configuration Parameter
---

# Configuration

On this page all common configuration parameters of the firmware are presented. Usually the internal defaults work
quite well to get the device up and running.

:::note[Customer specific configuration]
For larger orders Lobaro can apply a custom customer specific configuration for all parameter before
delivery.
:::

## Firmware Configuration Parameter

:::info[Product specific parameters possible]
The described configuration parameters are common for all products running this firmware. Nevertheless some products may
add additional parameters or alter the here described parameters, e.g. some allow additional values to be set. In any
case the documentation of the specific product takes precedence over this general description and should
also be read with care.
:::

### General{#general}

| Description                                  | Key                      | Type   | Possible Values    | Default |
|:---------------------------------------------|:-------------------------|--------|--------------------|:-------:|
| LTE / LoRaWAN Selection                      | <a href='#wan'>`WAN`</a> | String | `lte` or `lorawan` |  `lte`  |
| Days Without Connectivity Until Device Reset | `LostReboot   `          | Number | Any, e.g. `3`      |   `5`   |

#### `WAN`{#wan}

LPWAN technology used for connection and data communication with the backend server. This can be either cellular LTE (
NB-IoT, LTE-M) or LoRaWAN.

<Image alt='Lobaro Hybrid Connectivity LoRaWAN, NB-IoT, LTE-M'
img={require('./img/Hybrid-Connectivity-highRes.png')}
style={{width:'40%',paddingTop:'5px',paddingBottom:'5px'}} />

* `lte`: use either cellular NB-IoT or LTE-M
* `lorawan`: use LoRaWAN with OTAA (over the air activation)

#### Limitations in LoRaWAN vs. NB-IoT / LTE-M

* LoRaWAN Uplinks and Downlinks are limited to 52-222 Bytes depending on the Spreading Factor (Connection Quality).
    * Uplink with (longer) wMBUS Telegrams might be split over multiple LoRaWAN Messages.
    * Uplinks of many wMBUS telegrams might take a long period of time due to duty-cycle limitations of LoRaWAN.
    * Downlinks with big configuration values (e.g. long whitelist) must be split over multiple Downlinks which might be
      difficult to implement.
* Limited amount of meta-data:
    * Less information in status telegram, due to reduced uplink channel capacity.

### Meter Scanning

| Description                     | Key                                        | Type   | Possible Values                                                        | Default<div style={{width:'120px'}}/> |  
|:--------------------------------|:-------------------------------------------|--------|------------------------------------------------------------------------|---------------------------------------|
| WMBUS Listen Cron [UTC+0]       | <a href='#listencron'>`listenCron   `</a>  | String | Any [CRON](configuration/cron-configuration.md) String                 | `0 0 12 * * *`                        |
| WMBUS C1/T1 Listen Duration [s] | <a href='#durations'>`cmodeDurSec  `</a>   | Number | Any second value<br/>`0` = Do not collect C1/T1<br/>Max Value=`36000`  | `300`                                 |
| WMBUS S1 Listen Duration [s]    | <a href='#durations'>`smodeDurSec  `</a>   | Number | Any second value<br/>`0` = Do not collect S1<br/>Max Value=`36000`     | `0`                                   |
| Sensus RF Listen Duration [s]   | <a href='#durations'>`xmodeDurSec  `</a>   | Number | Any second value<br/>`0` = Do not collect X-Mode<br/>Max Value=`36000` | `0`                                   |
| Müller-Funk Listen Duration [s] | <a href='#durations'>`umodeDurSec  `</a>   | Number | Any second value<br/>`0` = Do not collect U-Mode<br/>Max Value=`36000` | `0`                                   |
| WMBUS ID Filter List            | <a href='#filter'>`devFilter`</a>          | String | List, e.g.<br/>`88009035,13456035`                                     | `[not set]`                           |
| WMBUS Type Filter List          | <a href='#filter'>`typFilter    `</a>      | String | List, e.g.<br/>`08,07`                                                 | `[not set]`                           |
| WMBUS M-Field Filter List       | <a href='#filter'>`mFilter      `</a>      | String | List, e.g.<br/> `DME,ITW,SEN,QDS`                                      | `[not set]`                           |
| WMBUS CI-Field Filter List      | <a href='#filter'>`ciFilter`</a>           | String | List, e.g.<br/>`8a,72`                                                 | `[not set]`                           |
| WMBUS Telegram Upload Limit     | <a href='#maxtelegrams'>`maxTelegrams`</a> | Number | Any number of max. Telegrams<br/>`0` = no limit.                       | `0`                                   |

#### `listenCron`{#listencron}

The listen cron defines when the device wakes up to receive the enabled wireless M-BUS and other radio protocols. Each
listen period is followed by uploading the data over the configured WAN technology. A reasonable interval strongly
depends on the
products power supply (battery vs. external powered) and the application demand of new metering data. Typical values
range from every 15 minutes to 14
days between consecutive readouts.

:::tip[in depth description]
[Read more](configuration/cron-configuration.md) about CRON parameterization.
:::

---

#### `cmodeDurSec` `smodeDurSec` `xmodeDurSec` `umodeDurSec` {#durations}

Duration in seconds, e.g. `300` (5 minutes), to collect metering data in corresponding wireless protocol. All listening
periods are executed one after the other for the duration defined. Afterwards all collected meter telegrams will be
transmitted using the configured `WAN` technology.

---

#### `devFilter` `ciFilter` `mFilter` `typFilter` {#filter}

Filter meters to be be collected and uploaded by wireless M-BUS related fields.

:::tip[in depth description]
[Read more](configuration/meter-reception-filter-config.md) about telegram filter parameterization.
:::

---

#### `maxTelegrams`{#maxtelegrams}

Set hard limit on how many telegrams will be collected and uploaded. The firmware will stop collection, once this number
has been collected, regardless of the passed time. Can be used save battery / data volume, should the device be in an
area with a large number of meters.

### LTE Connection{#lteconnection}

| Description              | Key                                         | Type     | Possible Values            | Default                       |  
|:-------------------------|:--------------------------------------------|----------|----------------------------|-------------------------------|
| LTE Lobaro Platform Host | <a href='#platformhost'>`Host         `</a> | IP / URL | List of various Endpoints  | `coaps://platform.lobaro.com` | 
| LTE MCC+MNC Code         | <a href='#lteparam'>`Operator     `</a>     | Number   | e.g. `26201` (Dt. Telekom) | `[not set]`                   |
| LTE Band                 | <a href='#lteparam'>`Band         `</a>     | Number   | `3` or `8,20` or `3,8,20`  | `3,8,20`                      |
| LTE APN                  | <a href='#lteparam'>`APN          `</a>     | String   | any APN                    | ` * `                         |
| LTE NB-IoT on/off        | <a href='#ltenet'>`UseNbiot     `</a>       | Bool     | `true` or `false`          | `true`                        |
| LTE M1 on/off            | <a href='#ltenet'>`UseLtem      `</a>       | Bool     | `true` or `false`          | `true`                        |
| LTE SIM Pin              | `PIN          `                             | Number   | 4 digits pin, e.g. `1234`  | `[not set]`                   |
| LTE DNS Servers used     | `DNS          `                             | IP       | List of DNS server IPs     | `9.9.9.9,1.1.1.1  `           |
| Plain UDP Host           | <a href='#plainUdp'>`UdpHost      `</a>     | IP       | any, e.g `94.130.20.37`    | `[not set]`                   |
| Plain UDP Port           | <a href='#plainUdp'>`UdpPort      `</a>     | Number   | any, e.g `3333`            | `[not set]`                   |

#### `Host` {#platformhost}

Hostname or IP of the Lobaro Platform instance **CoAP endpoint** to which the gateway communicates using UDP.

* Using DTLS: `coaps://platform.lobaro.com`
* No DTLS: `coap://platform.lobaro.com`
* Plain IP:  `94.130.20.37` (platform.lobaro.com)

:::tip[Host with fallback]
It's also possible to configure a list of URLs to implement a fallback mechanism. This is particulary helpful for
combining DTLS and non DTLS connection attempts: `coaps://platform.lobaro.com,coap://platform.lobaro.com `
:::

:::info[Alternative endpoints]
For this firmware the Lobaro IoT platform is mandatory. Other products may have options for additional endpoints, e.g.
direct **MQTT** communication.
Please refer to the product specific documentation and/or contact Lobaro for details on this topic.
:::

---

#### `APN` `Operator` `Band` {#lteparam}

Basic params to configure the NB-IoT or LTE-M connection. These parameters must be set in accordance to the SIM card and
network provider used. Usually the defaults for these parameters work quite well since they allow the modem to select
and join the network
using information on the SIM-card. Nevertheless, if known, the `APN` should be configured.

:::tip[in depth description]
[Read more](/configuration/lte-network-configuration.md) about LTE network configuration parameters.
:::

---

#### `UseNbiot` `UseLtem` {#ltenet}

The modem supports both NB-IoT and LTE-M technologies. Usually both are enabled and the cellular modem automatically
decides
with network type it should use at a specific location in the field. By setting one parameter to `false` you can insist
on
using the other technology. At least one parameter must stay enabled, e.g. set to `true`.

:::warning
On older nRF91 modem firmware (MFW < `1.3.0`) only one of this parameter can be enabled at a time, trying to set both
to `true`
will
result in selecting just NB-IoT.
:::

---

#### `UdpHost` `UdpPort` {#plainUdp}

Instead of sending the metering data to the lobaro platform these data can alternatively send to an external UDP socket.
This is helpful if you don't want your metering data on any external server but want to control your gateways using the
Lobaro Platform.

* `UdpHost`: Separate IP to upload plain telegrams via UDP
    * `[not set]` = upload to Lobaro IoT Platform using Host parameter address
* `UdpPort`: Separate Port to upload plain telegrams via UDP
    * only used when UdpHost is set

:::info
Even the metering data is send to an external server the firmware normally still needs a connection a Lobaro Platform
instance for sending status information or performing remote configuration / firmware updates.

If needed contact Lobaro for possible options to handle all communication without our platform, e.g. using direct MQTT
to an external broker.
:::

### LoRaWAN Connection{#lorawanparams}

| Description                    | Key                                          | Type     | Possible Values   | Default        |
|:-------------------------------|:---------------------------------------------|----------|-------------------|----------------|
| LoRaWAN DevEUI                 | `DevEUI       `                              | byte[8]  | any               | `Device EUI64` |
| LoRaWAN AppEUI / JoinEUI (1.1) | `JoinEUI      `                              | byte[8]  | any               | `random`       | 
| LoRaWAN AppKey                 | `AppKey       `                              | byte[16] | any               | `random`       |
| LoRaWAN NwkKey (1.1)           | `NwkKey       `                              | byte[16] | any               | `random`       |
| LoRaWAN Days between Timesync  | `TimeSync     `                              | Number   | any               | `3`            |
| LoRaWAN Payload Format         | <a href='#payloadformat'>`PayloadFormat`</a> | Number   | `0`, `1`, `2`     | `0`            |                                
| LoRaWAN use OTAA               | `OTAA         `                              | Bool     | `true` or `false` | `true`         |
| LoRaWAN Random TX Delay [s]    | `RndDelay     `                              | Number   | any               | `10`           |

#### `PayloadFormat` {#payloadformat}

Used encoding of the LoRaWAN uplink payload packets.

* `0` = Encoding in ports
* `1` = prefix bytes and time
* `2` = prefix bytes, time, and rssi

### Special

| Description             | Key             | Type   | Possible Values   |   Default   |
|:------------------------|:----------------|--------|-------------------|:-----------:|
| Verbose UART Log        | `verbose      ` | Bool   | `true` or `false` |   `false`   |
| Addon RAM configuration | `extRam       ` | String | Lobaro Internal   | `[not set]` |
