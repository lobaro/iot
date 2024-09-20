---
title: MQTT
draft: true
---
# MQTT 

:::warning
This page is currently marked as draft and will not be included in builds of this documentation.

We do not want to have this information public. But for Auth support we need to build a small serverside tool to deliver the page.
:::



## MQTT Communication
The device can be configured to connect and upload to an MQTT broker by setting a host with
protocol `mqtt://` or `mqtts://` in the configuration. To use MQTTs, the device must have a
device certificate. There can be a mixture of the four protocols (CoAP, CoAPs, MQTT, MQTTs),
the hosts are tried in the order they are set in the configuration, until one is successful.


### MQTT host configuration
A `host` entry for MQTT(s) must be given in URI form. Hosts can be set either by IPv4 addressed
or by domain names. There can be a port number specified; without one it will default to 1883
for MQTT and 8883 for MQTTs. A username and password can be added, optionally. No topic must be
added to the host entry. The format is

    `mqtt://[username:password@]host[:port]`
    `mqtts://[username:password@]host[:port]`

If username or password contain special characters, they must be URL-encoded.


### MQTT topics
The device will only publish on topics that conform to this syntax:

    `LOB/<DevEUI>/up/<message-type>`
    `LOB/<DevEUI>/req/<message-type>`

and will only subscribe to topics that conform to this syntax:

    `LOB/<DevEUI>/down/<message-type>`

where `<DevEUI>` is the device's EUI in urn form, e.g. `urn:dev:mac:70b3d5e05001c6f3`, and
`<message-type>` is a string that describes the message type.

Uplinks to the `up` topics never expect a response, they can be processed in a queue with
a delay.

Uplinks to the `req` topics expect a response, on the `down` topic with the same `<message-type>`.
The response must be sent within a few seconds and reference the original message number.
See documentation in https://github.com/lobaro/refend for more information.

### MQTT Payloads

Documented in https://github.com/lobaro/refend

All payloads are encoded in CBOR format. For simplicity we will document them as JSON.

:::info[CBOR to JSON Mapping]
- Byte Arrays are encoded as base64 strings in JSON but have a separate type in CBOR
- Map Keys are always strings in JSON, despite CBOR supports any type
:::

## Certificate Handling
Each device has its own certificate to authenticate with the Server. The certificate is signed by the Lobaro Root CA.
Thus it is enough to trust the Lobaro CA to trust all devices. 
Devices might have different Intermediate CAs which are all signed by the Lobaro Root CA.

:::info
The same certificate is also used for CoAPs over DTLS.
:::

The following sections describe how to handle certificates on the device during production.

### Self-signed Certificates

:::warning
Using self-signed certificates is possible but not recommended for production use.

A MQTT Server would need to know each and every device Certificate (or at least the Fingerprint) to authenticate the devices.
This is much more convenient using a common CA.
:::


Devices can create a self-signed certificate. This is done over the Shell, using the command

    `cert self-signed <subject>`

The CN is automatically set using the DevEUI in urn form, e.g. `urn:dev:mac:70b3d5e05001c6f3`.
The DevEUI urn will also be used as Subject Alternative Name (SAN) in the certificate.
Any fields added as `<subject>` will be appended to the subject (not the SAN), so you can use something like

    `cert self-signed C=DE,O=Lobaro,L=Hamburg`

Subject must be comma separated (without blanks) and not be surrounded by quotes (see example).
When the cert creation is successful, the certificate will be stored in the device's flash memory and
printed to the console.

The device must have a DevEUI set to create a self-signed certificate (and a private key, but that one is
generated during boot, if it is missing).

### Certificate Signing Requests
Devices can create a Certificate Signing Request (CSR) to be signed by a CA. This is done over the Shell, using the command

    `cert csr <subject>`

It works the same as `self-signed`, but the certificate is not created, only the CSR. The CSR will be printed to the console.
It must be signed by the provisioning computer that runs the shell (or by hand), using an intermediate CA that is in
turn signed by our Device Root CA.

### Writing Certificates from CSR
After the CSR has been signed externally, the certificate can be written to the device using the command

    `cert own`

It is a multi-input command, where you input the certificate in PEM format, one line at a time ('\n' terminated).
You need to include `-----BEGIN CERTIFICATE-----` and `-----END CERTIFICATE-----` lines in the input. You must also
include an intermediate CA certificate; this can be done by inputting the device's certificate first and then
the intermediate CA certificate after it (without a newline in between). Sending an empty line will finish the input;
the certificate chain will then be written to the device's flash memory. You can cancel the input by sending
`exit` as a single line. Longer certificate chains are possible; the limitation is around 4 kiB of space for
the both, the device's certificate chain and the trusted CA certificates together (in DER format).

### Trusted CA Certificates
The device can store multiple trusted server CA certificates or server certificates directly. Those are entered
using the shell command

    `cert ca`

The handling is the same as with `cert own`, only that you do not provide a chain, but a list of trusted CA
certificates. Size is limited by a shared 4 kiB space with the device's certificate chain (in DER format).

### Certificate Revocation
There is no support for certificate revocation in the device.

### Certificate Signing
Signing (when not self-singed) must be done externally by the provisioning computer in the provisioning tool.
A development variant of the certificate chains exists under https://github.com/lobaro/development-certificates.

