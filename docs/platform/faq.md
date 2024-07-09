---
title: FAQ
---

# FAQ - Lobaro Platform

## Why is the Lobaro Platform mandatory for our NB-IoT Sensors & Gateways?

This question sometimes arises from integrators who run their own type of IoT platform tailored to a particular use-case
and don't want an intermediate between their system and the IoT hardware to integrate. In contrast to this our platform
is primary considered as a head end system for device management of Lobaro and 3rd party sensors and gateways. It's
meant as secure, stable
and scalable abstraction layer to the actual hardware complexity and gives the following benefits to the integrator or
end-user:

* **Encrypted data transfers using UDP and NB-IoT**, client and server certificate-based, using DTLS, while still being
  able to use battery life friendly UDP transfers with little overhead.
* Administration of client and server certificates.
* **Remote configuration** of sensors via simple APIs (Web UI, REST).
* Support for **Firmware Updates** Over The Air (FOTA).
* **Scalability**, even with thousands of devices.
* **Intermediate storage** for sensor data before further processing in the downstream application.
* **Data insight and export** independent of downstream application via CSV export or REST API.
* **Integration with LoRaWAN Network Servers** like ChirpStack, TTN / TTI, Lotiot, and many more ...
* **Unified API for downstream applications** across different connectivity technologies on the device side (e.g.
  NB-IoT,
  LoRaWAN, wireless MBUS, LAN).
* Quickly bring IoT applications to market by focusing on the use case and the actual data without having to deal with
  hardware and firmware implementation details or properly secured data transfers from the sensor to the cloud.
* **Low hardware requirements** for the server of the Lobaro Platform. Small setups can run on the same server next to
  the
  use-case specific platform or even an Raspberry PI for embedded use-cases. Bigger setups can be auto scaled in cloud
  environments.
* Internal APIs between hardware and Lobaro Platform can be changed, e.g. for firmware extensions, without compromising
  a **stable API to the downstream system** and thus increasing the stability of the end application.

As one might see, all these functionality require a high level of knowledge about the hardware and how it internally
works. **Lobaro can only provide support and guarantees that all features of our NB-IoT products are available and
function as expected if the Lobaro Platform is also used as a counterpart.**

If using the Lobaro IoT platform is absolutely not an option many of our NB-IoT products can also be configured to use
LoRaWAN uplinks which shifts the dependence to the used LoRaWAN network server beside the well-known challenges of
LoRaWAN networks compared to cellular IoT. We also work on Direct MQTT support for some of our devices to allow direct
integrations with a custom broker.