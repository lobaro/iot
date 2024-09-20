---
draft: true
---

# SFTP (CSV) Integration

The SFTP integration allows exporting device data as CSV files over the SFTP protocol at configurable time intervals. 
This feature enables seamless data transfer to external servers for processing, storage, or analysis.

## How It Works

- **CSV Export Format**: The integration uses the CSV format specified in the *DeviceTypes TableConfig* to determine the columns included in the export. For more information on how to configure the table, refer to the [Table Config Documentation](../device-types/table-config.md).
- **File Naming Convention**: Each export generates a CSV file for each DeviceType, following the naming convention `<exportTime>_<DeviceType>.csv`. 
  - For example: `2021-02-18_15-31_Lobaro-NB-IoT-wMBus-Gateway.csv`.
- **Scheduled Exports**: The export process runs at the time schedule you configure.
It automatically gathers data from all devices matching the specified filter and includes any data added since the last successful export.

### Configuration parameters

| Config Param           | Examples               | Comment                                                                                                                                                                   |
|------------------------|------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Target Host/IP Address | example.com, 127.0.0.1 | Domain or IP Address for your SFTP Server                                                                                                                                 |
| Port                   | 22                     | Port your server uses. Default for SFTP is 22.                                                                                                                            |
| Path on Server         | uploads/lobaro         | Directory path to use on the server. The CSV files will be placed into this directory. If the directory doesn't exist and the user has create rights, it will be created. |
| Username               | foobar                 | Username to log in with. Make sure the user has permission to write into the target directory.                                                                            |
| Password               | MySecretPassword2Use   | Password for the user.                                                                                                                                                    |
| Filter                 | NB-IoT-Gateway-Filter  | Filter to use for the integration (defined under Integration → Filter). Only devices matching the filter will be exported.                                                |
| Time to run            | 04:30                  | Time to execute the integration daily.                                                                                                                                    |


## Key Features

- **Configurable Time Intervals**: You can specify the exact time when the CSV export should occur, ensuring the process fits within your data processing or reporting workflows.
- **Per-DeviceType CSV Files**: To keep data organized, a separate CSV file is generated for each device type, making it easier to manage and analyze specific device data.
- **Incremental Data Export**: Only data that has changed or been added since the last export is included, ensuring that the export is efficient and prevents redundant data transfer.

## Example

If the integration is configured to run at 04:30 daily, and the DeviceType is "Lobaro-NB-IoT-wMBus-Gateway," the export file generated on February 18, 2021, at 15:31 will be named:  
`2021-02-18_15-31_Lobaro-NB-IoT-wMBus-Gateway.csv`.

