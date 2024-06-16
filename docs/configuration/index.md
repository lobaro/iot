---
sidebar_position: 0
---

# Introduction

Lobaro devices allow a wide range of internal configuration adjustments.
These chapter describes some generally valid tools and parameters that are used in the same way for many Lobaro devices.
All configuration parameters are stored non-volatile independently of the power supply in the Lobaro devices.

Device and firmware specific parameters are explained in the respective documentation.

## How to configure

<Image alt='Lobaro Configuration Tool'
img={require('./img/Lobaro-Config-in-Log.png')}
style={{width:'60%',paddingTop:'10px',paddingBottom:'10px'}} />

Any Lobaro device configuration can be set and read out either locally via a PC with the [Lobaro configuration USB
adapter](./usb-config-adapter) and the [Lobaro Maintenance Tool](./lobaro-tool/index.md) or over the air remotely
using the Lobaro IoT platform and mobile radio (NB-IoT, LTE-M) or any LoRaWAN network server using downlinks on the
special cfg port.

<Image alt='Lobaro Platform Configuration Tab'
img={require('./img/configuration-example-lobaro-platform.png')}
style={{width:'60%',paddingTop:'10px',paddingBottom:'10px'}} />

Some network related parameters, such as the APN of the mobile cellular network provider, must usually
first be configured correctly locally before the device can get online.

Alternatively, possible on request for larger orders, an customer specific configuration agreed with the customer can
also be installed by Lobaro during
production provisioning.

