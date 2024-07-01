# Datasources

Data from IoT devices and other application can be received over different ports and protocols.

## Outgoing Integrations

Integrations are used to forward and receive data from other Systems.

Beside Integrations that "Push" data to other systems, like HTTP, MQTT, SFTP, etc. there are also Integrations that work
bi-directional like REST and LoRaWAN.

:::info
See: [Integrations](../integrations)
:::

## Ports & Protocols

Different ports and protocols can be configured to receive data from IoT Devices.

| Datasource                 | Application Protocol | Transport Protocol | Default Port | Direction | Comment                                                                |
|----------------------------|----------------------|--------------------|--------------|-----------|------------------------------------------------------------------------|
| REST                       | HTTPs                | TCP                | 443          | In        | REST API that can also be used upload sensor data                      |
| CoAP                       | CoAP                 | UDP                | 5683         | In        | Used by Lobaro NB-IoT Devices, can be extended for other manufacturers |
| CoAPs                      | CoAPs                | UDP                | 5684         | In        | Used by Lobaro NB-IoT Devices, can be extended for other manufacturers |
| Tekelek                    | Tekelek Proparitary  | TCP                | 55345        | In        |                                                                        |
| Dragino                    | Dragino Proeritary   | TCP                | 5600         | In        |                                                                        |
| Lobaro NB-IoT (deprecated) | Lobaro Properitary   | UDP                | 1064         | In        | Deprecated: Will be removed in future                                  |
| HTTP (Push)                | HTTP(s)              | TCP                | 80/443       | Out       | Integration to forward data to external HTTP APIs                      |
| MQTT                       | MQTT                 | TCP                | 1883         | Out       | Integration to forward data to external MQTT Brokers                   |
| SFTP                       | SFTP                 | TCP                | 22           | Out       | Integration to forward data to external SFTP Servers                   |

### CoAP

#### Timings

| Type                 | Duration   | Note                                                                  |
|----------------------|------------|-----------------------------------------------------------------------|
| Blockwise Transport  | 30 Seconds |                                                                       |
| DTLS Timeout         | 35 Seconds | Must be higher than on the device side (which is 30 seconds)          |
| DTLS Flight Interval | 15 Seconds | FlightInterval controls how often we send outbound handshake messages |

### Roadmap

In future we are planning to implement more datasources

* Dragino CoAP
* MQTT
* Lightweight M2M (LWM2M)
* ... and other vendor specific protocols