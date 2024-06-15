---
sidebar_position: 1
---

# Lobaro Maintenance Tool

<Image alt='Lobaro Configuration Tool'
img={require('../img/Lobaro_Tool_ConfigFeature.png')}
style={{width:'60%',paddingTop:'5px',paddingBottom:'5px'}} />

The Lobaro Maintenance Tool can be used to configure and diagnose Lobaro IoT devices locally using a PC and a special
USB configuration adapter. It's available as free download.

## Download

* [https://github.com/lobaro/flash-tool-release/releases](https://github.com/lobaro/flash-tool-release/releases)

:::tip[Correct Download for your OS]

* Windows: `...windows_x86_64.zip`
* Linux: `...linux_x86_64.zip`
* macOS (ARM): `...mac_arm64.zip`
* macOS (INTEL): `...mac_x86_64.zip`
  :::

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

