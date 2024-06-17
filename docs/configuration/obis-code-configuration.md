---
sidebar_position: 4
displayed_sidebar: configurationSidebar
title: OBIS-Code Configuration
---

# OBIS-Code Configuration

Object identification system (OBIS) Codes are used to identify the different readings of a smart meter transferred in
Smart Message Language (SML), which is a commonly used protocol on D0 optoelectronic interfaces. They are described in
the international standard IEC 62056-61.

## Structure

Every code consists of 6 separated group sub-identifiers. In general some of these identifiers may be omitted but our
products require the full code.

The basic pattern is:  
**A-B:C.D.E*F**

| Group | Description                          | Examples                                  |
|:-----:|:-------------------------------------|:------------------------------------------|
| **A** | Medium                               | 1 = electricity, 8 = water                |
| **B** | Channel                              | 0 = no channel available                  |
| **C** | Physical Unit, depends on A          | power, current, voltage...                |
| **D** | Measurement Type, depends on A und C | maximum, current value, energy...         |
| **E** | Tariff                               | 0 = total, 1 = tariff 1, 2 = tariff 2 ... |
| **F** | Separate Values defined by A-E       | billing periods, 255 if not used          |

## Examples

| Obis Code     | Meaning                                            |
|:--------------|:---------------------------------------------------|
| 1-0:1.8.0*255 | Positive active energy (A+) total [kWh]            |
| 1-0:3.8.1*255 | Positive reactive energy (Q+) in tariff T1 [kvarh] |

