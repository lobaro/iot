---
sidebar_position: 0
displayed_sidebar: configurationSidebar
title: Overview
---

# Configuration Overview

The device configuration allows a wide range and flexible way of internal settings adjustments for Lobaro hardware.
This chapter generally describes our tools, common configuration parameters and workflows that are used in the same way
for many
Lobaro devices to adjust the used configuration.

:::info[This is a general doc]
Device and firmware **specific** parameters are explained in the respective product documentation.
:::

## Different ways to configure

There are two ways of configuring our devices in existence. On the one hand locally where you need physical access to a
device and on the other hand remotely over the air. For larger rollouts only remote updates of configuration showed to
be a feasible way to go.

### Locally

Any Lobaro device configuration can be set and read out locally via a PC with the [Lobaro configuration USB
adapter](./usb-config-adapter) and the [Lobaro Maintenance Tool](./lobaro-config-tool.md).

<Image alt='Lobaro Configuration Tool'
img={require('./img/Lobaro-Config-in-Log.png')}
style={{width:'60%',paddingTop:'10px',paddingBottom:'10px'}} />

Some network related parameters, such as the APN of the mobile cellular network provider, **must** usually
first be configured correctly locally before the device can get online for the first time.

### Remotely

Once the device has connectivity the configuration can be changed remotely over the air using various methods, e.g. the Lobaro IoT Platform, MQTT or any LoRaWAN network server
using initiated special downlink communication:

<Image alt='Lobaro Platform Configuration Tab'
img={require('./img/configuration-example-lobaro-platform.png')}
style={{width:'60%',paddingTop:'10px',paddingBottom:'20px'}} />

:::info[Bigger Rollouts]
For larger orders, a customer specific configuration agreed upon can
also be installed by Lobaro during production provisioning. This way manual reconfiguration from the firmware defaults
can be avoided before installing the devices in the field and over the air configuration will work out of the box.
:::