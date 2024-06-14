# Configuration Tool

Lobaro devices allow a wide range of configuration adjustments. This page describes the generally valid parameters that are used in the same way for Lobaro devices, although not all products have to support all parameters listed here. Device-specific parameters are explained in the respective documentation. All configuration parameters are stored non-volatile in the Lobaro devices.

## How to configure

Any Lobaro device configuration can be set and read out either locally via a PC with the [[Lobaro configuration USB adapter|doc:Device Configuration.Lobaro Maintenance Tool.USB Config Adapter.WebHome]] and the [[doc:Device Configuration.Lobaro Maintenance Tool.WebHome]] or remotely when using the [[Lobaro IoT platform|doc:Lobaro IoT Platform.WebHome]] and mobile radio (NB-IoT, LTE-M) or any LoRaWAN network server using [[downlinks on a special port|doc:Background Articles.LoRaWAN.WebHome]]. Network parameters, such as the APN of the mobile cellular network provider, must usually first be configured correctly locally. Alternatively, possible on request for larger orders, an intimate configuration agreed with the customer can also be installed by Lobaro ex works.

### Additional Parameter Information

In addition to the information on this page and in the device-specific documentation, each Lobaro device provides additional information about the configuration parameters supported by the respective firmware via the serial log interface. This information appears directly after starting / resetting the device and can be read out via the Lobaro Maintenance Tool. In case of a configuration error this is also displayed in the log.
