---
sidebar_position: 2
#displayed_sidebar: configurationSidebar
title: MBUS Reception Filtering
---

# MBUS Reception Filtering

Lobaro firmwares that can receive (wireless) M-BUS have (optional) common filter configuration parameter, that can limit, which telegrams are
processed by it. If
filtering is used, any telegram is checked against the filters immediately after it has been received. Only if the
telegram fits the criteria defined by all filters is it saved to the internal store and will be uploaded. All telegrams
that don't fit will be dropped and not processed further. This can be important to save bandwidth and battery life of a
device. In many areas there will be many wMBus devices that send telegrams you are not interested in.

There are four 4 common filter configuration parameter that are used in products / firmware with (wireless) MBUS collection abilities. These four filters check different aspects of a
telegram before storing it internally for later upload:

* `mFilter`
    * Manufacturer filter – filters by the 3-letter manufacturer code that is present in every telegram (e.g. LOB for
      Lobaro GmbH).
* `typFilter`
    * Device Type filter – filters by the 2-hex-digit code defining the nature of the sending device (e.g. 07 for water
      meters).
* `devFilter`
    * Device filter – filters by the 8-digit ID, that is mandatory for each sending device (e.g. 87654321).
* `ciFilter`
    * CI-Field filter – filters by the 2-hex-digit CI-Field present in every telegram.
    * That is a technical code describing the purpose of a telegram (e.g. 8a).

Each filter only checks for a single field of information in a telegram. If a filter is left blank, no filtering is done
for that field. So if you for example leave mFilter blank, there will be no filtering over the manufacturer of the
device. Each filter is processed independently.

A filter is a simple whitelist for its field. If a telegram's value is listed in the filter, the telegram will be
collected. If not, it will be dropped. Entries in the list are separated by a single comma "," (no spaces!). If you add
a single exclamation
mark "`!`" in front of the list, the complete list will be treated as a blacklist.

## Manufacturer filter

Each wMBus telegram has the manufacturer of the sending meter encoded as a 3-letter code assigned by the [DLMS User
Association](https://www.dlms.com/home). On their site you can find the complete list
of [manufacturer IDs](https://www.dlms.com/flag-id-directory/). The field in the telegram that holds this
information is called M-Field. The M-Field for Lobaro is `LOB`.

:::info
Entries in this filter must be exactly 3 letters long. The case is ignored.
:::

### Examples for M-Field Codes

| M-Code | Company                                        |
|:------:|------------------------------------------------|
|  LOB   | Lobaro GmbH, Hamburg, Germany                  |
|  DME   | Diehl Metering, Ansbach, Germany               |
|  QDS   | Qundis GmbH, Erfurt, Germany                   |
|  ARD   | Arad Group Ltd, Dalia, Israel                  |
|  SEN   | Sensus Metering Systems, Ludwigshafen, Germany |
|  SON   | Sontex SA, Sonceboz, Switzerland               |
|  ITW   | ITRON (Water), Issy-les-Moulineaux, France     |

### Example for an `mFilter` whitelist

`mFilter` : `SEN,ITW,DME` will collect only telegrams from meters by Sensus Metering, Itron (Water), and Diehl Metering.
All other
telegrams will be dropped.

### Example for an `mFilter` blacklist:

`mFilter` : `!SEN,ITW,DME` will drop any telegram from meters by Sensus Metering, Itron (Water), or Diehl Metering. Any
other
manufacturer will be stored and uploaded.

## Device Type Filter

Each wMBus device is of a type (e.g. water meter, heat cost meter). The type is encoded as a 2-hex-digit number. The
entries must be exactly 2 hex digits long, case is ignored.

### Examples for Device Type Codes

```json title="Wireless M-BUS Device Codes (hex)"
"00": "Other",
"01": "Oil",
"02": "Electricity",
"03": "Gas",
"04": "Heat",
"05": "Steam",
"06": "Warm Water", // 30 - 90°C
"07": "Water",
"08": "Heat Cost",
"09": "Compressed Air",
"0A": "Cooling load meter (outlet)",
"0B": "Cooling load meter (inlet)",
"0C": "Heat (inlet)",
"0D": "Heat / Cooling load meter",
"0E": "Bus / System component",
"0F": "Unknown",
"10": "consumption meter",
"11": "consumption meter",
"12": "consumption meter",
"13": "consumption meter",
"14": "Calorific value",
"15": "Hot Water", // >= 90°C
"16": "Cold Water",
"17": "Dual Water meter", // Hot and Cold
"18": "Pressure",
"19": "A/D Converter",
"1A": "Smoke detector",
"1B": "Room", // e.g. temp, humidity
"1C": "Gas detector",
"1D": "Sensor",
"1E": "Sensor",
"1F": "Sensor",
"20": "Breaker (electricity)",
"21": "Valve (gas or water)",
"22": "Switching device",
"23": "Switching device",
"24": "Switching device",
"25": "Customer unit (display device)",
"26": "Customer units",
"27": "Customer units",
"29": "Garbage",
"2A": "Carbon dioxide",
"30": "system device",
"31": "Communication controller",
"32": "Unidirectional repeater",
"33": "Bidirectional repeater",
"34": "system device",
"35": "system device",
"36": "Radio converter (system side)",
"37": "Radio converter (meter side)"
```

:::tip
Usually the actual used device code that a specific meter uses can be found in its manual.
:::

### Example for an `typFilter` whitelist

`typFilter` = `04`

Will receive only heat meters (`04`) telegrams.

### Example for an `typFilter` blacklist:

`typFilter` = `!08,07,F0,06,16,15,32,1A,80`

Will **not** receive any of the listed meter types.

## Device ID Filter

Each wMBus device has an **8-digit device ID** or Address. This ID is normally printed on the device. The combination of
Manufacturer Code and Device ID should be globally unique. This is the most specific filter and can be used to tune the
Gateway to only collect telegram from individual devices. The amount of possible meters in the list depends is product
dependend and ranges from 500 to 2.500 IDs, please check the actual product documentation or ask Lobaro.

* IDs for wireless M-BUS can omit leading zeros and are 1-8 digit long numbers.
* This filter also accepts 11-digit IDs for filtering Sensus-RF telegrams in X-mode.

:::info
The number of telegrams uploaded can be higher than the number of IDs in the whitelist, because some meters send out
multiple different telegrams.
:::

### Example for an `devFilter` whitelist

`devFilter` = `88009035,13456035,56268931`

### Example for an `devFilter` blacklist:

`devFilter` = `!88009035,13456035,56268931`

## CI Filter

The CI-Field is a 2-hex-digit number that is used to encode type and purpose of a telegram. Some meters send multiple
different types of telegrams that can be identified by this field. Entries in this list must be exactly 2 hex digits
long, case is ignored.

## Telegrams with multiple layers

wMBus telegrams can have multiple headers in different layers. This can be the case if multiple devices are involved in
creating the telegram, because it is read from the actual meter by an attached device that sends it out. Telegrams with
multiple headers can have multiple different manufacturer codes, device types, and device IDs. These telegrams are
accepted by a whitelist filter, if at least one of the values in the telegram is present in the whitelist. It will be
dropped by a blacklist filter if at least one of the values from the telegram is present in the blacklist.

## Filtering Sensus RF (X-mode)

X-mode is a special listening mode of the Gateway, that collects proprietary telegrams from meters by Sensus/Xylem. *
*Only
the devFilter will be used on X-mode telegrams**. The IDs used for Sensus-RF meters are 11 digit long and written on the
meter in a format with dashes, like this: 1010-012-4411. To use the device filter for X-mode, add the meter IDs to the
list in devFilter without the dashes. Sensus-RF IDs must be entered using exactly 11 digits, e.g. 10100124411.

If the a single device uses X-mode together with any other mode (C/T, S, U), the devFilter is used for both. Any ID that
has 11 digits will be used for X-mode only. IDs with 1-8 digits will be used for all the other modes, but not for
X-mode. If there are only 11-digit IDs in devFilter, it will be blank (= no device filter) for modes C/T, S, and U. If
there are only 1-to-8-digit IDs in devFilter, it will be blank (= no device filter) for X-mode.

## Filtering Müller Funk (U-mode)

U-Mode is a special listening mode of the Gateway, that collects proprietary telegrams from meters by Müller-electronic
GmbH. **Only the devFilter will be used on U-mode telegrams, the other filters will be ignored.** Device IDs for Müller
Funk
have the same format as in wMBus: 8 digits. When U-mode is used on a device that also uses C/T-mode or S-mode, put the
IDs for both modes in the devFilter list. The IDs in the list will be used for both modes.

## Filtering Strategies

There is no all-purpose-strategy for filtering. What is best for you will depend on your use cases.

Setting an explicit device list for each of your Gateways will lead to the most efficient use of battery and bandwidth.
But it comes with huge administrative overload, as each Gateway will need an individually composed list. When new meters
are installed, the list must also be updated.

For bigger role-outs it might be easier to work with device type filters. If you are only interested in water meters, a
`typFilter` set to "06,07,15,16,17" might be a sufficient setting for your bridges; it will filter out any head cost
meters and smoke detectors. Unintentionally received water meters can simply be ignored in the backend. A combination of
`typFilter` and `mFilter` will often reduce the number of unwanted telegrams sufficiently.

Individual tuning can be done by initially installing a gateway with no filters configured. After the first uploads, the
wanted telegrams can be identified in the backend, and filters can then be created and sent to the gateway way remote
configuration downlink.

If the Gateway uploads telegrams that you do not want, you can put each unwanted meter on the device blacklist via
remote configuration.

### Filter fine tuning using `maxTelegrams`

The reception time the Gateway for collecting wMBus telegrams can be minimised by a combination of filters and
maxTelegrams. If maxTelegrams is set to a number different than 0, the Gateway will stop collection and start uploading
as soon as that many telegrams are in the store. Set the the IDs of all wanted Meters in devFilter and
set `maxTelegrams`
to the number of telegrams you expect. Be aware, that some devices will send out multiple different telegrams. Set
maxTelegrams accordingly.
