---
sidebar_position: 2
#displayed_sidebar: configurationSidebar
title: Lobaro Config Tool
---

# Lobaro Config Tool

The Lobaro Config Tool (a.k.a. Lobaro Maintenance Tool) can be used to configure and diagnose Lobaro devices locally using a PC and our special
[USB configuration adapter](./usb-config-adapter.md). It's available as free [download](#download) for all common
operating systems.

<Image alt='Lobaro Configuration Tool'
img={require('./img/lobaro-tool/Lobaro_Tool_ConfigFeature.png')}
style={{width:'60%',paddingTop:'5px',paddingBottom:'5px'}} />

## Download

See: [https://github.com/lobaro/flash-tool-release/releases](https://github.com/lobaro/flash-tool-release/releases)

:::tip[Select correct Download for your OS]

* Windows: `...windows_x86_64.zip`
* Linux: `...linux_x86_64.zip`
* macOS (ARM): `...mac_arm64.zip`
* macOS (INTEL): `...mac_x86_64.zip`
:::

## System Requirements

The tools runs as local webserver and the user frontend is accessed using a standard browser.

### Operating systems

The tools is available for the following operating systems:

* macOS
* Windows 7/10/11
* Linux

### Default UART config

The default uart configuration is:

* 115200 Baud
* 8 data bits
* Even parity
* 1 stop bot

This UART configuration is used by **all Lobaro devices** on the "Config" port.

## Installation

### Windows

After downloading unzip and simply start the "lobaro-tool.exe" with double click.

:::info
Windows might show up a security warning and ask you to proceed anyway. This behavior is normal.
:::

### macOS / Linux

After downloading and unzip the "lobaro-tool" file, e.g. to a directory "lobaro" in your home path. Then make the tool
file executable:

```bash"
cd ~/lobaro
chmod +x lobaro-tool
./lobaro-tool
```

## Connection Setup

Connect your Lobaro Device using the [Lobaro Config Adapter](./usb-config-adapter.md) to the USB-port of your computer.

When your device is successfully attached to your computer, you can build a connection with the Lobaro Maintenance Tool.

<Image alt='Lobaro Configuration Tool - Automatic Connection'
img={require('./img/lobaro-tool/tool-connect-auto.png')}
style={{width:'60%',paddingTop:'10px',paddingBottom:'10px'}} />

Under Hardware Connection select _auto_ and click _Connect_, as seen in the screenshot above. If you know to which port
the
device is connected to your computer (either COM or ttyUSB), you can alternatively select it explicitly instead of using
auto.

## Device Configuration

<Image alt='Lobaro Configuration Tool - Automatic Connection'
img={require('./img/lobaro-tool/tool-config-loaded.png')}
style={{width:'60%',paddingTop:'10px',paddingBottom:'10px'}} />

When you are connected to a Lobaro Device, you can use the Tab named **CONFIGURATION** to read and change the
configuration
parameters of the Device. You can read out the current configuration from the device by pressing the Reload Config
button (reading takes a few seconds).

:::warning[Automatic device reboot]
Every time you use one of the buttons Reload Config. Write to Device, or Restore Default, the connected device will be
rebooted! Also keep in mind that the operations triggered by pressing the buttons include communication with the device
over a serial bus and they will take a few seconds.

To avoid errors, please do not press those buttons repeatedly!
:::

When the configuration is read, you can alter the parameters by clicking on the pencil icon on the right. Values that
you changed will printed in bold font. When you have adjusted all values you want to change, you **must** press
_Write to Device_ to actually change anything in the device internal memory! Writing the values will also reboot the
device.

The Button _Restore Default_ will reset all config parameters of the connected Device to their internal default values.
The device will reboot, and the listed values of the configuration in the Lobaro Maintenance Tool well be updated.

:::danger[Always reload the config before changing it!]
When you are working with multiple devices, make sure that your always press Reload Config after attaching a new device
before you start updating values. If you fail to do so, you might accidentally transfer values from the previously
attached device to the newly connected. This is especially a problem when working with LoRaWAN sensors, as you will copy
the DevEUI from one device to the other! This can be reverted by using the _Restore Default_ functionality.
:::

You can watch the rebooting of the Device and check the altered configuration parameters by locking in the **LOGS** Tab.

## Device Uart Logging

<Image alt='Lobaro Configuration Tool - Automatic Connection'
img={require('./img/lobaro-tool/tool-config-logs.png')}
style={{width:'60%',paddingTop:'10px',paddingBottom:'10px'}} />

All of our Devices provide extensive logging information over the CONFIG port. When you are connected to a Device in the
Lobaro Maintenance Tool, you can read the log messages in the LOGS Tab. This feature is helpful if you try to find out
the cause of problems you experience. You can also find out a lot of information about your Device, for example you can
find the parameters used to connect your LoRaWAN Devices to your Network Server (DevEUI, AppKey, etc.).

All messages are displayed in the big text area, each line is prefixed by the time it is received (using the clock of
your computer). You can use Clear Log to start again with an empty text area. The cleared messages will still be
available through the log files that the tool creates.

When starting, our devices print out their current configuration parameter values. Most Devices also have a power on
test, that checks if attached sensors can be read successfully. Any Problems that the Device detects will be printed to
the log.

### Restarting

The LOGS Tab also contains a button Run (reset). This button triggers a reboot of the attached device. This can be
useful when you start working with your device or if you try to fix issues with connected sensors.

### Log-Files

<Image alt='Lobaro Configuration Tool - Automatic Connection'
img={require('./img/lobaro-tool/tool-show-logfiles.png')}
style={{width:'25%',paddingTop:'10px',paddingBottom:'10px'}} />

The logs are also written to files on your computer. Every time you start the Lobaro Maintenance Tool, a new log file is
created. When you press the button **Show Log Files** in the upper right location of the tool, a file browser is opened
at the location where log files are kept.

* Windows: `%homepath%\.lobaro\logs`
* Linux / Mac: `~/.lobaro/logs`
* File Name: `<DATE>-uart-log.txt`

### Sending to the device

Below the text area is an input field Send via UART. Text entered here (and confirmed with Enter) will be sent to the
connected Device via UART. Some of our Devices use this feature, for example the LoRaWAN Modbus Bridge for its
interactive Dialog Mode.

### Log parsing

If you need to parse the log messages of one of our Devices with your own tools, you can connect to it without the
Maintenance Tool by using any serial UART reader. You can find the UART parameters above. Take care on the additional
control lines (DTR, RTS) to have the right state to keep the device run the firmware.

## Device Firmwareupdate{#fwupdate}

Our devices are shipped ready to use with firmware installed on them, so normally you do not need to install firmware
yourself. However, over time we sometimes add new features to our devices or fix bugs that come up over time. If you
want to use those improvements for devices all ready shipped to you, you can update the firmware yourself.

This page describes how you install firmware on devices that you have physical access to. This can be done for most of
our devices, those using LoRaWAN and those using NB-IoT/LTE-M.

Our NB-IoT/LTE-M devices also support installing firmware over the air, without physical access. Check the [platform
documentation](/cloud) for details.

### Getting the firmware

You will need the Firmware you want to install to your device as a file on your computer.

You can get the latest firmware files from this documentation on the firmware subpage for your specific Lobaro product.
The files are
in a format called Hex and are therefore also called Hex-File. The filename always starts with app- and contains the
version number as well as a short description of its function and the hardware it is used for. So, for example,
`app-nrf9160-wmbus-TZ2-0.3.1-mcuboot-slot0.hex` contains firmware for our wMBus-Gateway on NB-IoT-Hardware (nrf9160) in
version 0.3.1.

### Installing new firmware

<Image alt='Lobaro Configuration Tool - Flash new firmware'
img={require('./img/lobaro-tool/tool-config-flash.png')}
style={{width:'60%',paddingTop:'10px',paddingBottom:'10px'}} />

Make sure your Device is successfully attached to your computer and the Maintenance Tool is connected, as described
above. In the Tab **FIRMWARE** you can select the Firmware file you want to install using the button _Select Hex File_.
This
will open a file selection dialog, where you can select the hex-file with the Firmware you want to install to your
Device. To start installing you need to press _Flash Hex File_. The upload will take several seconds; progress will be
displayed by the blue progress bar. It turns green on successful completion. You can verify the installation succeeded
and your Device is now running the correct version by checking the **LOGS** Tab.

You should also take a look at the Configuration Parameters. When an update adds new features, there might be new
Configuration Parameters to set, or some existing Parameters might work differently. Check the Firmware's Changelog to
see what changed between versions and what you have to look out for, for your individual Firmware update.