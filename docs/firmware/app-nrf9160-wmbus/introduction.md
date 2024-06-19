---
sidebar_position: 0
displayed_sidebar: firmwareSidebar
title: Introduction
---

# app-nrf9160-wmbus

This page describes the Lobaro wireless M-Bus gateway firmware, called `app-nrf9160-wmbus`, which is executable on
different hardware variants which are in turn used to build different products. Nevertheless, this common description is
valid for all products independently which hardware it actually runs on.

## Firmware Introduction

<Image alt='Lobaro wireless M-BUS Gateway firmware'
img={require('./img/wmbus-gateway-bridge-lora-nb-iot.jpg')}
style={{width:'80%',paddingTop:'5px',paddingBottom:'5px'}} />

The Lobaro wireless M-Bus gateways collect consumption values from up to 650(*) commercially available water
meters, heat
meters, heat cost allocators or similar with 868 MHz wireless M-Bus radio interface, Sensus RF Bubble Up or Müller Funk
and forward them encrypted via NB-IoT or LTE-M cellular radio or alternatively LoRaWAN networks for further processing
on the Internet.

Additionally, the gateway hardware may be equipped with a sensor addon board which can provide additional sensor
measurement values beside the collected metering data. If an addon is present depends on the actual product running this
firmware.

Forwarded meter values are transmitted, optionally additionally encrypted via DTLS, to a shared or private instance of
the Lobaro IoT platform and can be viewed there or downloaded as a CSV file. Alternatively, standardised APIs such as
MQTT, HTTP Push, SFTP or a REST interface are available to connect downstream systems or platforms easily and securely.
When using LoRaWAN, the Lobaro Platform is optional. When using NB-IoT or LTE-M, on the other hand, it is mandatory.
This requirement is explained in the Lobaro IoT Platform FAQ.

Thanks to the new NB-IoT mobile radio, optimised for sensor data, remote reading even works in places such as basements
where smartphones have poor or no reception.

(*) based on average telegram size 75 Bytes. On request, the capacity for meter telegrams can be increased to up to
2,500 by means of an additional built-in memory.

## Compatible Metering Protocols

<Image alt='Lobaro wireless M-BUS Gateway firmware'
img={require('./img/MBusWirelessLogo.jpg')}
style={{width:'20%',paddingTop:'5px',paddingBottom:'5px'}} />

### Wireless M-BUS S1, C1 or T1

* Unidirectional 868 MHz modes following DIN EN 13757-4.
* Open metering specification (OMS, Annex O): PHY_A - 868 MHz (uplink only)
* Qundis AMR

### Sensus RF Bubble UP

* Manufacturer specific radio protocol for 868 MHz (Xylem Inc.).
* Unidirectional bubble up mode is supported.
* ⚠️ Decoding of Sensus RF telegrams needs the Lobaro telegram parser and unfortunately can't be disclosed.

<table><tr>
    <td><Image alt='PDF Download' img={require('@site/static/img/pdf.png')} style={{width: '32px'}}/></td>
    <td><a target="\_blank" href={require('./files/en---sensusrf-brochure.pdf').default}>Sensus RF Brochure</a></td>
</tr></table>

### ME-Funk

* A.k.a. "Müller Funk" - Manufacturer specific radio protocol for 868
  MHz ([Müller-electronic GmbH](https://www.mue-line.de/allgemeine-informationen/)).
* ⚠️ Decoding of ME-Funk telegrams needs the Lobaro telegram parser and unfortunately can't be disclosed.

---

:::info
433 MHz variants are available on products equipped with the additional 433 MHz hardware addon for the following
specifications:

* Wireless M-Bus, Open metering specification (OMS, Annex O): PHY_B - 433 MHz (uplink only)
* Sensus RF Bubble UP 433 MHz - Manufacturer specific (Xylem Inc.) radio protocol
  :::

## Working Principle

The firmware remains in power-saving mode while not active most of the time. It leaves the low power sleep mode in the
following situations:

### CRON based Scans

The firmware is configured by its `listenCron` configuration parameter to wake up at regular intervals to collect / scan
for
metering
telegrams over its 868 MHz wireless interface. The following sequence of operations is executed on each cron triggering:

:::tip[CRON configuration parameter]
[Click here to learn more about **cron configuration** parameters](configuration/cron-configuration.md).
:::

1. Wait in deep sleep low power mode for `listenCron` to trigger
2. Collect metering data in all enabled wireless modes sequentially
    * Collect C1-Mode and T1-Mode telegrams (wMBUS) in parallel for `cmodeDurSec` seconds (if not 0)
    * Collect S1-Mode telegrams (wMBUS) for `smodeDurSec` seconds (if not 0)
    * Collect X-Mode telegrams (Sensus RF) for `xmodeDurSec` seconds (if not 0)
    * Collect U-Mode telegrams (Müller Funk) for `umodeDurSec` seconds (if not 0)
3. Optional: Perform sensor measurement using the optional hardware addon (only if any sensor addon installed)
4. Upload all stored data via NB-IoT / LTE-CatM1 or LoRaWAN (depends on `WAN` configuration)
    * Upload all collected metering telegrams, status and sensor data
    * When the upload fails the upload is retried every 24h after daily status or until the next `listenCron` triggers.
5. Sleep till next `listenCron` triggers or status message upload.

:::info
This sequence also will be executed one after any device startup oder manual reset.
:::

:::note[Raw telegrams]
All meter telegrams are received "as is", e.g. encrypted or plain over the air. Only the always readable telegram header
information is parsed for internal filtering and deduplication. Parsing and decryption of such raw metering data happens
in the backend, e.g. in
the Lobaro head end system or any other connected system. Lobaro offers a standalone [REST API (www.mbus.org)](https://www.mbus.org)
for raw (wireless) M-BUS telegrams parsing which can be licensed.
:::

### Daily Status Message

Once a day the firmware sends a status message. This allows for reaching the device, e.g. for changing the
configuration, at least once a day independent of the configured regular scan interval (see above). This status message
contains information on many vital parameters of the gateway.

* Upload status telegram normally at midnight **0:00h (UTC+0)**
    * Solar-powered hardware variants: noon **12:00h (UTC+0)**
* Upload remaining telegrams in memory, if any failures happened during previous attempts.
* Sleep till next `listenCron` or next days status telegram.