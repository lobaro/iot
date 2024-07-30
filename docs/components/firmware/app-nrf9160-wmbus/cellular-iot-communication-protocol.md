---
sidebar_position: 6
#displayed_sidebar: componentsSidebar
title: Cellular IoT Communication
---

# Cellular IoT Communication

This page describes the possible uplink and downlink message contents when using NB-IoT or LTE-M (cellular IoT) as
technology to communicate with the Lobaro IoT Platform, e.g. the
firmware `WAN` [parameter](configuration-parameter.md#general)
must be configured to `lte`.

<Image alt='Lobaro Platform'
img={require('./img/Lobaro-Platform-wmbus.png')}
style={{width:'60%',paddingTop:'0px',paddingBottom:'8px'}} />

Parsed and optionally decrypted Wireless M-BUS data can be viewed and further processed in the Lobaro IoT platform.
Third party systems can be connected
to retrieve any wireless M-BUS data and status information using the different available platform integrations. This
makes an easy data forwarding
e.g. using MQTT, HTTP-Push or the REST interfaces possible without in-depth knowledge of the underlying actual
communication of the platform with this firmware. Lobaro uses an optimized low power protocol secured by TLS for
communication between
this firmware based products and our platform.

:::tip[SaaS instance Lobaro Platform]
The SaaS instance is available at [platform.lobaro.com](https://platform.lobaro.com/). It's free for testing purposes.
Contact Lobaro to get access.
:::

:::info[Lobaro platform is mandatory for this firmware]
For this firmware the Lobaro IoT platform is mandatory. The low power protocol details to and from the products based on
this
firmware unfortunately will not be disclosed.

Other products have options for additional communication endpoints, e.g. a direct **MQTT**
integration. These products are based on **different** firmware and marketed differently. Please refer to the product
catalogue and/or
contact Lobaro for available products with (Lobaro) platform free cellular IoT communication options.
:::

