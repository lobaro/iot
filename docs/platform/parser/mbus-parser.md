# M-Bus Parser

The Lobaro M-Bus Parser is used from device Parsers and available as web API
at https://platform.lobaro.com/#/wmbus/parser

Supported formats:

* M-Bus (Meter-Bus)
* wM-Bus (Wireless M-Bus)
* Sensus RF BUP (
  see [SensusRF Brochure](https://www.xylem.com/siteassets/industries--applications/resources/comm-networks/en---sensusrf-brochure.pdf))
* µline (see https://www.mue-line.de/)

:::note
An Platform Account an license is required to use the wMbus Parser. We offer trial licenses for testing.
:::

## Supported Features and Manufacturers

We support almost the full M-Bus (EN 13757) and OMS specification.  
This leads to support of almost **all devices** on the market.

**Notable Features are:**

* Decryption Modes
    * Mode 3 (DES with IV)
    * Mode 5 (AES with CBC)
    * Mode 7 (AES with CBC and KDF)
    * Mode 9 (AES with GCM)
    * 0xFE - Counter-Mode AES-128 (AES128 with CTR)
    * DIEHL Prios Proprietary encryption
* Headers
    * All Manufacturer Codes
    * Most headers including:
        * 0x8C (Extended Connection Layer 1)
        * 0x8D (Extended Connection Layer 2)
        * 0x8E (Extended Connection Layer 3)
        * 0x8F (Extended Connection Layer 4)
        * 0x90 (Auth and Fragmentation Layer)
        * 0x70 (Error)
        * All Short Headers (4 Bytes) e.g. 0x72
        * All Long Headers (12 Bytes) e.g. 0x7A
        * 0x72 (Short Header)
        * and more
* Data Records
    * All DIFs and VIFs and most extensions
    * All data formats
    * All units
    * All quantities
    * Compact Frames
* Format Frames

### Manufacturer Specifics

Some Telegrams contain manufacturer specific data. We try to parse support as many as possible.
Even if we do not parse the data, it's available from the result in binary form.

- SensusRF Bubble UP (Proprietary Radio)
- DIEHL Real Data (Proprietary Encryption)
- QUNDIS Walkby (Proprietary Format)

**Smoke Detector Status Information:**
- EI Electronics
- Sontex
- Zenner
- QUNDIS

Various fixes and workarounds for manufacturer specific bugs that do not follow the specification.

:::info
The list is not exhaustive. Other manufacturers and features might be supported as well.

If in doubt, please contact us.
:::

## API Response Example

The following is an example of the parsing result of an encrypted example telegram from the OMS specification:

**Telegram:**
`2e44931578563412330333637a2a0020055923c95aaa26d1b2e7493b2a8b013ec4a6f6d3529b520edff0ea6defc955b29d6d69ebf3ec8a`

**Key:**
`0102030405060708090A0B0C0D0E0F11`

<details>
  <summary>**JSON Response**</summary>

```json
{
  "Raw": "0x2e4493157856341233037a2a0020055923c95aaa26d1b2e7493b013ec4a6f6d3529b520edff0ea6defc99d6d69ebf3",
  "RawWithCrc": "0x2e44931578563412330333637a2a0020055923c95aaa26d1b2e7493b2a8b013ec4a6f6d3529b520edff0ea6defc955b29d6d69ebf3ec8a",
  "FrameFormat": "A",
  "Length": 46,
  "CField": "0x44",
  "CFieldString": "0x44 (SND_NR)",
  "MField": "0x9315",
  "MFieldCodeString": "ELS",
  "MFieldLongString": "Elster GmbH, Germany, Europe",
  "Id": 305419896,
  "IdString": "12345678",
  "Version": 51,
  "Device": "0x03",
  "DeviceString": "Gas",
  "CiField": "0x7a",
  "HeaderKnown": true,
  "PayloadKnown": true,
  "CrcValid": true,
  "HasCrc": true,
  "SourceType": "WMBUS",
  "IsCompactFrame": false,
  "FormatSignature": 61330,
  "FormatFrame": "0x0c14046d02fd17",
  "ParserVersion": "1.11.3",
  "Header": {
    "Serial": 0,
    "IdString": "",
    "ManufacturerCode": 0,
    "MFieldCodeString": "",
    "MFieldLongString": "",
    "Version": 0,
    "DeviceType": "0x00",
    "DeviceString": "",
    "EncryptionMode": 5,
    "EncryptionModeString": "AES with CBC",
    "EncryptedBlocks": 2,
    "HopCount": 0,
    "IsAccessible": false,
    "IsBidirectionalMode": false,
    "IsSynchronous": false,
    "ReservedBit": false,
    "TelegramType": 0,
    "AccessNumber": 42,
    "StatusByte": 0,
    "ConfigField": [
      32,
      5
    ]
  },
  "Ell": null,
  "Afl": null,
  "Body": {
    "Raw": "0x2f2f0c1427048502046d32371f1502fd1700002f2f2f2f2f2f2f2f2f2f2f2f2f",
    "DataRecords": [
      {
        "DifDataLength": 4,
        "DifFunctionString": "Current Value",
        "DifDataFormat": "BCD (8 digits)",
        "DifSubunit": 0,
        "VifUnit": "m^3",
        "VifQuantity": "Volume",
        "VifExponent": 0.01,
        "VifEDescription": "",
        "Value": 2850427,
        "ValueScaled": 28504.27,
        "ValueString": "28504.27",
        "Tariff": 0,
        "StorageNo": 0,
        "DifVif": "0x0c14",
        "Data": "0x27048502"
      },
      {
        "DifDataLength": 4,
        "DifFunctionString": "Current Value",
        "DifDataFormat": "signed binary (32 bits), or date/time in F format",
        "DifSubunit": 0,
        "VifUnit": "",
        "VifQuantity": "Time & Date",
        "VifExponent": 1,
        "VifEDescription": "",
        "Value": 354367282,
        "ValueScaled": 354367282,
        "ValueString": "2008-05-31T23:50:00Z",
        "Tariff": 0,
        "StorageNo": 0,
        "DifVif": "0x046d",
        "Data": "0x32371f15"
      },
      {
        "DifDataLength": 2,
        "DifFunctionString": "Current Value",
        "DifDataFormat": "signed binary (16 bits), or date in G format",
        "DifSubunit": 0,
        "VifUnit": "",
        "VifQuantity": "Error flags",
        "VifExponent": 1,
        "VifEDescription": "",
        "Value": 0,
        "ValueScaled": 0,
        "ValueString": "0",
        "Tariff": 0,
        "StorageNo": 0,
        "DifVif": "0x02fd17",
        "Data": "0x0000"
      }
    ],
    "PayloadKnown": true,
    "IsEncrypted": false,
    "DecryptionFailed": false,
    "BlockCiField": 0
  },
  "KeyIdentifier": "6CDF4E13B88E3B890A803C4EECF8B89D60916C2E4E3C5CB32818F06A56BB60B5"
}
```

</details>

### Important Fields

| Field            | Description                                                                                                                                                            |
|------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| ParserVersion    | Version of the Parser (e.g. `1.11.3`)                                                                                                                                  | |
| Raw              | Raw telegram data as passed to the API, might contain a CRC or not                                                                                                     |
| RawWithCrc       | The Raw Telegram with CRC, CRC is added when not already present in Raw                                                                                                |                                                                                                                                                                              |
| IsEncrypted      | `true` if the parsed telegram is still encrypted                                                                                                                       |
| DecryptionFailed | true if the parser tied to decrypt the telegram without success.<br/> Can be used in conjunction with IsEncrypted to detect if the telegram was encrypted (see below). |
| PayloadKnown     | If the payload of the telegram (related to the CI field) is known to the parser and can be parsed                                                                      |
| BodyParseError   | Error while parsing the payload body                                                                                                                                   |
| FormatFrame      | The FormatFrame containing all DIB (Data Information Blocks) without the values                                                                                        |
| FormatSignature  | Unique signature of the DifVif structure of all DataRecords (hash of FormatFrame). If any DifVif changes, the FormatSignature does change as well.                     |
| KeyIdentifier    | Unique identifier that contains the Hash of the used key. Useful for Key lookups without leaking the actual key.                                                       |

### Encryption state

| IsEncrypted | DecryptionFailed | Meaning                                                                      |
|-------------|------------------|------------------------------------------------------------------------------|
| `true`      | `true`           | 	No valid key                                                                |
| `false`     | `false`          | 	Telegram not encrypted                                                      |
| `true`      | `false`          | Telegram is encrypted but parser can not decrypt it (e.g. unknown algorithm) |
| `false`     | `true`           | Plain telegram where decryption failed - should not happen                   |

### VifUnit & VifQuantity

There are a many valid combinations of VifUnit & VifQuantity. All possible values are listed below.

Lines without VifUnit have an empty string as Unit.

<details>
```
VifQuantity: (Enhanced) Identification
VifQuantity: Access Code Developer
VifQuantity: Access Code Operator
VifQuantity: Access Code System Operator
VifQuantity: Access Code User
VifQuantity: Access Number
VifQuantity: Any VIF
VifQuantity: Bus Address
VifQuantity: Control signal
VifQuantity: Cumulation counter
VifQuantity: Customer
VifQuantity: Customer location
VifQuantity: Data container for wMBus
VifQuantity: Datacontainer for manufactuerer specific protocol
VifQuantity: Date
VifQuantity: Date and time of battery change
VifQuantity: Day of week
VifQuantity: Device type
VifQuantity: Digital Input
VifQuantity: Digital Output
VifQuantity: Dimensionless
VifQuantity: Error flags
VifQuantity: Error mask
VifQuantity: Fabrication No
VifQuantity: Firmware version
VifQuantity: First storage # for cyclic storage
VifQuantity: Hardware version
VifQuantity: Last storage # for cyclic storage
VifQuantity: Manufacturer
VifQuantity: Manufacturer specific
VifQuantity: Manufacturer specific data
VifQuantity: Number of counter stops
VifQuantity: Parameter set identification
VifQuantity: Password
VifQuantity: Receive window management
VifQuantity: Remote control
VifQuantity: Reset counter
VifQuantity: Retry
VifQuantity: Security key
VifQuantity: Size of storage block
VifQuantity: Software version
VifQuantity: Special supplier information
VifQuantity: State of parameter activation
VifQuantity: Summertime (begin, end, deviation
VifQuantity: Time & Date
VifQuantity: Time point of day change
VifQuantity: Week number
VifUnit: A, VifQuantity: Current
VifUnit: American gallon, VifQuantity: Volume
VifUnit: American gallon/h, VifQuantity: Volume flow
VifUnit: American gallon/min, VifQuantity: Volume flow
VifUnit: Baud, VifQuantity: Baudrate
VifUnit: Bittimes, VifQuantity: Response delay time
VifUnit: Currency units, VifQuantity: Credit
VifUnit: Currency units, VifQuantity: Debit
VifUnit: GJ, VifQuantity: Energy
VifUnit: Hz, VifQuantity: Frequency
VifUnit: J, VifQuantity: Energy
VifUnit: J, VifQuantity: Power
VifUnit: J/h, VifQuantity: Power
VifUnit: K, VifQuantity: Temperature difference
VifUnit: MCal, VifQuantity: Energy
VifUnit: Relative humidity, VifQuantity: %
VifUnit: Reserved, VifQuantity: Reserved
VifUnit: Units for H.C.A., VifQuantity: H.C.A.
VifUnit: V, VifQuantity: Voltage
VifUnit: W, VifQuantity: Cumul count max power
VifUnit: W, VifQuantity: Power
VifUnit: Wh, VifQuantity: Energy
VifUnit: bar, VifQuantity: Pressure
VifUnit: d, VifQuantity: Remaining battery
VifUnit: dBm, VifQuantity: Receiver sensitivity
VifUnit: feet^3, VifQuantity: Volume
VifUnit: kVA, VifQuantity: Apparent power
VifUnit: kVA/h, VifQuantity: Apparent energy
VifUnit: kVAR, VifQuantity: Reactive power
VifUnit: kVAR/h, VifQuantity: Reactive energy
VifUnit: kg, VifQuantity: Mass
VifUnit: kg/h, VifQuantity: Mass flow
VifUnit: m^3, VifQuantity: Volume
VifUnit: m^3/h, VifQuantity: Volume flow
VifUnit: m^3/min, VifQuantity: Volume flow
VifUnit: m^3/s, VifQuantity: Volume flow
VifUnit: s, VifQuantity: Averaging Duration
VifUnit: s, VifQuantity: Duration since last cumulation
VifUnit: s, VifQuantity: Duration since last readout
VifUnit: s, VifQuantity: Interval of data transmission
VifUnit: s, VifQuantity: On time
VifUnit: s, VifQuantity: Operating time
VifUnit: s, VifQuantity: Operating time battery
VifUnit: s, VifQuantity: Period of tariff
VifUnit: s, VifQuantity: Point in Time
VifUnit: s, VifQuantity: Storage interval
VifUnit: °, VifQuantity: Phase U-U
VifUnit: °, VifQuantity: Phase U-l
VifUnit: °C, VifQuantity: Cold / Warm Temperature Limit
VifUnit: °C, VifQuantity: External temperature
VifUnit: °C, VifQuantity: Flow temperature
VifUnit: °C, VifQuantity: Return temperature
VifUnit: °F, VifQuantity: Cold / Warm Temperature Limit
VifUnit: °F, VifQuantity: External temperature
VifUnit: °F, VifQuantity: Flow temperature
VifUnit: °F, VifQuantity: Return temperature
VifUnit: °F, VifQuantity: Temperature difference
```
</details>