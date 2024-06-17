---
sidebar_position: 4
displayed_sidebar: configurationSidebar
title: LTE Network Configuration
---

# LTE Network Configuration

In order for the Lobaro devices to be able to dial into the mobile network, it may be necessary to configure the network
related parameters correctly.

:::tip
Lobaro devices normally perform a network selection based on the profile stored on the SIM card inserted in the device.
This means that in most case the mobile `operator` and `band` **have
not** to be configured since the devices perform an autodetect based on internal metrics. In some cases it may be
beneficial
to set the device to use a specific operator, then the operator, and band configuration parameters of the device comes
into play.

In contrast to this the `apn` parameter should be set correctly in any case. The `*` (autodetect) feature will only work
for few sim cards, like **1NCE** and **Vodafone Easy Connect** SIM cards.
:::

## Configuration Parameters

Our cellular IoT (LTE-M or NB-IoT) devices usually allow the configuration of

* `APN`
    * Should be configured to SIM specific value, e.g. `iot.1nce.net`
    * Default: `*`
        * APN Autodetect -> Modem uses internally known APN
            * Will only work for 1NCE and Vodafone EasyConnect
        * APN autodetect not possible: Modem falls back to `Not set` (see below)
    * `Not set` -> Modem uses SIM internal information

* `Operator`
    * Usually **no need** to configure it explicitly to some specific MCC+MNC operator code like `26201`
    * Default: `Not set` -> Modem performs automatic network selection
* `Band`
    * Usually **no need** to configure it explicitly
    * Default: `Not set` -> Modem will use one of these bands `3,8,20`

:::note
`Not set` denotes that the configuration parameter field is empty.
:::

:::warning
If you decide to configure the `operator` and/or `band` you may decrease the devices coverage and ability to find
alternative networks at a specific location. Use this configuration parameters only if you know what you are doing!
:::

For initial configuration of these parameters please use the [Lobaro Maintenance Tool](./lobaro-config-tool.md).

## List of common APN and Operators

* MCC = Mobile Country Code
* MNC = Mobile Network Code
* Operator = MCC+MNC (Config Parameter for Lobaro Devices)

| Network                         | Country | **Operator** | MCC | MNC | **APN**                                   |
|---------------------------------|---------|:------------:|:---:|:---:|-------------------------------------------|
| Deutsche Telekom                | Germany |  **26201**   | 262 | 01  | **internet.m2mportal.de**                 |
| 1NCE                            | Germany |    **\***    |     |     | **iot.1nce.net**                          |
| Vodafone Deutschland            | Germany |  **26202**   | 262 | 02  | IoT Easy Connect: **lpwa.vodafone.com**   |
| Telefonica (O2)                 | Germany |  **26203**   | 262 | 03  | IoT Sim Prepaid: **iotde.telefonica.com** |
| T-Mobile Austria GmbH (Magenta) | Austria |  **23203**   | 232 | 03  | ?                                         |
| TDC A/S                         | Denmark |  **23801**   | 238 | 01  | ?                                         |
| Telenor Denmark                 | Denmark |  **23802**   | 238 | 02  | ?                                         |
| Telia DK                        | Denmark |  **23820**   | 238 | 20  | ?                                         |
| Tele2                           | Sweden  |  **24007**   | 240 | 07  | ?                                         |
| COM4                            | Norway  |  **24202**   | 242 | 02  | **com4**                                  |

Other provider codes and deployed bands are listed in
a [list of mobile operator codes](https://en.wikipedia.org/wiki/Mobile_Network_Codes_in_ITU_region_2xx_(Europe)) on
Wikipedia.

Additional information on operators and bands can be found here:

* [halberdbastion.com](https://halberdbastion.com/intelligence/mobile-networks)
* [mcc-mnc.com](https://mcc-mnc.com/)