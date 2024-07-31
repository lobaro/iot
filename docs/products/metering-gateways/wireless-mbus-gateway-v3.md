---
sidebar_position: 1
#displayed_sidebar: productsSidebar
title: wM-Bus GW V3 (Battery)
---

# Wireless M-BUS Gateway V3 (Battery)

<Image alt='Wireless M-BUS Gateway V3 (Battery)'
img={require('./img/LOB-GW-HYB-WMBUS_wmbus-gateway-v3_Lorawan_NB-IoT_noBorder.jpg')}
style={{width: '40%', paddingTop: '10px', paddingBottom: '10px'}}/>

## Description

Battery-powered gateway for regular remote reading of up to 650...800 wireless M-Bus (868 MHz) and Sensus RF consumption
meters (e.g. water meters, heat cost allocators) via NB-IoT, LTE-M mobile radio or LoRaWAN to the Internet. Suitable for
indoor and weather-protected outdoor installation. Ideal for intra-year consumption information (uVI) and billing in the
housing industry.

### Features

* wM-Bus meter data upload via NB-IoT or LTE-M mobile radio (nano SIM card)
* Secure DTLS data transmission (client + server certificates) via mobile radio
* Alternative upload via LoRaWAN 1.0.2 (EU-868)
* Compatible with wireless M-BUS S1, C1/T1 modes (868 MHz) meters
* Compatible with Xylem Sensus RF Bubble Up (868 MHz)
* Compatible with Müller Funk (ME protocol, Walk-By) for µon and µflow skyW-2 and skyE-2
* Internal 50 kByte memory, e.g. for 650 counter telegrams of 70 bytes each
* On request: variant with extra memory to support more than 2500 counter telegrams.
* Remote configuration: transmission intervals, filter: meter ID, manufacturer, device type
* Signed firmware updates (FOTA) via mobile radio
* Battery: 3.6V lithium thionyl chloride battery (D-cell)
* IP65 housing (Spelsberg, TG PC 1208-6-o): 122 mm (l) x 82mm (w) x 55mm (h)
* Weight: 318g (with battery)

### Product Components{#components}

:::info[Component Info]
This product is manufactured by Lobaro from the following components. Many details on this product can be found in the
common
description of the used firmware and other components. Please use the links below to access the products detail
description.
:::

| Component   | Manual / Description                                                                                                            | Additional note                                       |
|:------------|:--------------------------------------------------------------------------------------------------------------------------------|:------------------------------------------------------|
| Firmware    | [app-nrf9160-wmbus](/components/firmware/app-nrf9160-wmbus/introduction.md)                                                     | See [here](#fwupdates) for available firmware updates |
| Housing     | [TG PC 1208-6-o](/components/enclosures/spelsberg_TG_PC_1208-6-o.md)                                                            | 122 mm (l) x 82mm (w) x 55mm (h)                                           |
| Battery     | [LSH20 Cell (13 Ah)](/components/batteries/19ah-battery-pack) or [Battery Pack (19Ah)](/components/batteries/19ah-battery-pack) | Li-SOCl2 (3.6 V)                                   |


## Product Identification

<Image alt='Label Wireless M-BUS Gateway V3 (Battery)'
img={require('./img/labelv3.png')}
style={{width: '25%', paddingTop: '10px', paddingBottom: '10px'}}/>

* Name: **Wireless M-Bus Gateway V3 (Battery)**
* Type: **LOB-GW-HYB-WMBUS**
* MPN / Ordering code: `8000162`

### Variants

### Accessories

## Datasheet & Quickstart

| Document Type            | Download PDF                                                                                                                                                      |
|:-------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Data sheet + Quickstart  | [Download 🇩🇪 ](https://files.lobaro.com/index.php/s/SArz8mXdRTwyCHQ/download) ⎮ [Download 🇬🇧 ](https://files.lobaro.com/index.php/s/zS2J32EZX6mTxtQ/download) |
| 1-Page Printable version | [Download 🇩🇪 ](https://files.lobaro.com/index.php/s/r6M8kEsE2jwEQGx/download) ⎮ [Download 🇬🇧 ](https://files.lobaro.com/index.php/s/yFiXeAX7yoBH67s/download) |

* Print settings: DIN A4 double sided, flip on short side
* Folding: You can fold it to a six page leaflet, using the marker next to "Initial operation".

## Product specific details

:::info
Information provided in this chapter is only valid for the above product unless otherwise noted. In case of doubt,
the information in this section takes precedence over the general [description of any component](#components).
:::

### Internal view{#insideview}

<Image alt='Gateway V3 Internal Components'
img={require('./img/GW_V3_Internal_Components.png')}
style={{width: '40%', paddingTop: '10px', paddingBottom: '10px'}}/>

1. Battery connector (XH)
2. SIM card socket (4FF - nano)
3. Reset button
4. Status LED (Blue, Green, Red)
5. Connector for [USB configuration adapter](/configuration/usb-config-adapter.md)
6. MicroSD card socket (unused by firmware)
7. Connector for internal PCB antenna
8. 3.6V D-Cell battery incl. loop tape
9. Pressure compensation element (PCE)

### LED signal patterns

The device has 3 three LEDs (B, G, R = Blue, Green, Red), labeled `Status` on the PCB: 🔵🟢🔴.

See also item [item (4)](#insideview) of internal view.

#### Patterns during booting/restart

* 🔵⚪🔴 B and R on: Device is in Bootloader Mode (not actively running, remove config adapter press reset to leave
  Bootloader Mode).
* ⚪🟢⚪ G on for ~2s and off again: Device just booted, either after power on, reset b button or software, or after a hard
  failure.
* ⚪⚪🔴 R flashes repeatedly on and off in 1s interval: critical failure during boot (failed to start application).

#### Patterns during normal operation

* 🔵⚪⚪ B flashes 1s on and 1s off in loop: building LTE connection to mobile provider. Followed by:
    * ⚪🟢⚪ Short G flash on success.
    * ⚪⚪🔴 Short R flash after connection failed.
* There are no patterns during normal LoRaWAN operation.

#### Exceptional patterns

* 🔵⚪🔴/⚪🟢🔴 Quickly changing between R & B and G & B every 5s in a loop: Modem is in connection restriction mode - keep
  device on power, will fix itself after 30min.

### Battery Lifetime Calculator

Please
see [online spreadsheet](https://docs.google.com/spreadsheets/d/1BjEO0UShdWuhaDqwDWPEtqszOBqUVfBH85dvtvdCjlA/edit?usp=sharing).

## Firmware Updates{#fwupdates}

* Firmware [Changelog](https://files.lobaro.com/s/BMpT5b2mzB7B35t)
* Download latest firmware: [Download (hex file)](https://files.lobaro.com/s/9Zo3KQnXJDHNMgE)
* Firmware can be updated locally over USB using the [Lobaro Tool](/configuration/lobaro-config-tool#fwupdate)
    * Use `...boot.hex` update file.
* Firmware can be updated remotely (over the air) using LTE-M or NB-IoT and
  the [IoT Platform](/platform/devices/downlinks).
    * Use `...slot1.hex` update file.

:::note

* A remote firmware update over LoRaWAN is currently not possible.
* Please contact Lobaro to get access to other than latest firmware version.
  :::

## DoC

* EU declaration of conformity (DoC): [Download 🇬🇧 ](https://files.lobaro.com/index.php/s/BKTJMPwmcg9Hs3n/download)