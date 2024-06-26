

# Changelog

**Application:** Lobaro Backend

## 1.104.5 - 2024-06-24

### Changed

* Devices Created At added as hidden default column in Devices Table

## 1.104.4 - 2024-06-24

### Fixed

* Parser UI - Editor would switch to default parser when editing the custom parser

## 1.104.3 - 2024-06-24

### Changed

* Default input format for js parser function `Record.setTime()` is an RFC3339 string, default timestamp format for JSON.
    * It can be created from a Date in JavaScript via `new Date(unixms).toISOString()`

### Fixed

* fix api token deletion message
* HTTP handler panic for Chirpstack Join events
* Devices Table - localStorage was not use in some special cases - causing the table to change unexpectedly when sorting or filtering

## 1.104.2 - 2024-06-19

### Fixed

* bad timing caused nil Nats client on startup

## 1.104.1 - 2024-06-19

### Changed

* Devices Table - deactivate ability to sort by organisation when displaying scope "global" or "organisation with suborgs" as it caused empty results. Workaround is to change into the organisation and display the devices table

## 1.104.0 - 2024-06-18

### Added

* Devices Table - New Column Settings Dialog - Pin columns to left or right edge of the table to make them always visible while scrolling

### Changed

* Key Exchange Import - Reworked with async backend processing to handle large key imports

## 1.103.3 - 2024-06-12

### Fixed

* Devices Page: when opening a filter dialog, the filter input field is always focused
* broken export on non-devicesPages

## 1.103.2 - 2024-06-11

### Fixed

* fix double x axis scroll bar - where the table was not scrollable because the page displayed a scrollbar over the devices table scrollbar

## 1.103.1 - 2024-06-11

### Changed

* Lansen wMbus Gateways will use a "las-" prefix in the address.

### Fixed

* fixed translation of export devices csv dialog on devices page

## 1.103.0 - 2024-06-11

### Fixed

* WmbusKeyImport: Reset all button now resets all fields

### Changed

* Export Devices CSV now exports:
    * selected or all devices of a device type
    * CSV format as configured in the table config or in a hardware import conform CSV format

## 1.102.3 - 2024-06-06

### Fixed

* WmbusKeyImport: Scale table (full page) and progressbar (only half page) as intended

## 1.102.2 - 2024-06-04

### Fixed

* Too much logging of failed wMBus parsing attempts

## 1.102.1 - 2024-06-04

### Fixed

* Parser cache not being saved due to failing Cache directory creation

## 1.102.0 - 2024-06-04

### Changed

* Reworked wMBus key import page, unifying import via CSV and Key Exchange Platform
* Key import in batches for better performance

### Added

* Supported importing of Sensus RF key CSVs

## 1.101.10 - 2024-05-25

### Fixed

* Fixed a bug where the device type side menu would show wrong counts when a device type was not owned by the current organisation

### Changed

* Device Type Side Menu size when expanded is now smaller

## 1.101.9 - 2024-05-24

### Fixed

* Fixed a bug where the device type side menu would not show the correct device type count

## 1.101.8 - 2024-05-24

### Changed

* New Devices Data Table is now permanent active - removed experimental design switch in myAccountMenu

## 1.101.7 - 2024-05-24

### Added

* `suborg`role for REST API Tokens: Read-only access to devices and parsed data of all suborgs

### Changed

* Devices CSV export only exports the devices of the current selected device type
* Improve PipelineStore queries, avoiding `LIMIT 1` for unique data queries, update cache device with every device update in (pipeline) DB
* Making `xlog` main logging factory:
    * Wrapping `slog.Logger`, but also supplying some `logrus` functions (`WithError()`, `WithFields()`, ´...) for compatibility
    * Added functions for dynamically changing logging settings
    * Unifying Log levels, to make a future change of the logging backend easier
* Device Type Side Menu uses cached queries for device counts - frontend caches for 1 minute - backend caches for 5 minutes and invalidates cache if new devices are created

### Removed

* `slogLogrus`package, as the logging backend was switched from logrus to slog
* Direct `logrus` dependency; still needed by github.com/docker/docker

## 1.101.6 - 2024-05-22

### Changed

* Improvements in UI for Device Type Side Menu

## 1.101.5 - 2024-05-22

### Changed

* Update mbus lib to v1.11.3

### Fixed

* Fix humanizing attempts of invalid compact profiles

## 1.101.4 - 2024-05-22

### Fixed

* Export Devices CSV failed on Devices Page - works now

## 1.101.3 - 2024-05-22 - DO NOT USE - BROKEN

## 1.101.2 - 2024-05-16

### Fixed

* reintruduced now fixed device ammount bubbles

## 1.101.1 - 2024-05-16

### Fixed

* Gormstore: ignored scope in device count query
* Devices Page Navigation: use correct scope on device count query

## 1.101.0 - 2024-05-15

### Added

* Display wMBus key fingerprints in the key table, searchable to find the key used to decrypt a telegram
* Device Types Menu shows device types with count and allows order by count or alphabetically
* `Record.setTimeField()`to set the name of a custom time field in each output record, works for batch records as well
    * This field is then used to set the time of each record, instead of the default `time` field or `receivedAt` field

### Changed

* Updated mbus lib to v1.11.2
* Output of key fingerprint in parsed telegram output
* Reworked Device Types Menu on left side of Device Types and Data Page
* Logging raw telegram + key fingerprint if parser panics
* Devices Import Dialog now shows the organisation of an existing device

### Deprecated

* `Record.setTime()`, as it doesn't work for batch record returns
    * Use `Record.setTimeField()` so set the name of a custom time field in each output record instead

### Fixed

* Panic when OMS parsing via API fails, logging errors and info, and returning nil instead
* Logging app and org id values
* JSON logging without HTML escaping
* keyExchangePlatform import: inform user when there was no new key at exchange platform

## 1.100.0 - 2024-05-07

### Added

* Added menu to display/hide columns in the device (experimental) table. The configuration is saved per user and device type.

### Fixed

* When exporting devices, only selected Devices will be exported.

## 1.99.6 - 2024-04-30

### Fixed

* Devices Page: frontend crash on empty deviceType Device Table Config cols array

### Changed

* Batch uplinks: If parsing fails, individual errors will be returned for each uplink, and the successful ones will be stored and processed
* Use pipeline store to fetch device info for parsing and CoAP: For better performance it only preloads the certificate, and includes only a limited number of columns. If caching is enabled, it will cache the device data there.

## 1.99.5 - 2024-04-23

### Fixed

* Device table fallback to default table config, if none is present

## 1.99.4 - 2024-04-22

### Changed

* Silence housekeeping for organisations without data retention limits in DB log
* Searchable Cron log table

### Fixed

* `NaN`replacement for customer parser (slice of maps was not handled correctly)

## 1.99.3 - 2024-04-16

### Changed

* Pipeline: always load device from DB before parsing and never take it from msg object

### Fixed

* Update MBus lib to v1.10.0, fixing Qundis failed decryption, but parsing encrypted payload issue

## v1.99.2 - 2024-04-16

## Added

* New (ant) table design in the devices tab. (Can be activated via the profile settings)

## Changed

* Devices query returns a devicesResult object, containing a devices array and pagination info, instead of an array of devices
* Pre-select current organisation when creating new users via Organisation section
* Replacing all `NaN` values in parsed output, device config and properties updates with `null` for JSON compatibility

### Fixed

* wMBus key import from exchange platform: Only import `END_USE` keys
* dont crash on nil nats connection ins NATS Client Service.

## v1.99.1 - 2024-04-08

### Fixed

* Key field usage with org key store in wmbus parser page
* fixed DB connection string logging

## v1.99.0 - 2024-04-03

### Added

* Added metrics for Stream sizes to prometheus
* Slow Queries are now also logged in JSON format
* Metric gorm_query_duration_seconds to trace Query Duration for different query types
* Output format options for HTTP integrations
    * JSON object (default)
    * JSON Array (wrapping a JSON object)
    * URL-encoded JSON (with customizable key)

### Changed

* NATS based pipeline metric names for prometheus were cleaned up
* When Parser runtime is exceeded and parser can not be interrupted shut down the server again
    * Create CPU and memory profile before shutdown
* Updated to GoLang v1.22.2
* Updated MBus Parser to v1.9.0

### Fixed

* GraphQL query in wMBus parser tab updated to ensure org keystore is used when option is ticked
* Update device in cache after parsing properties or config values

## v1.98.1 - 2024-04-02

### Fixed

* JetStream messages are all acked, else they stay inside the stream
* URL Escaping for DB Connection string

### Changed

* Updated mbus parser lib to v1.8.0

## v1.98.0 - 2024-04-02

### Changed

* NATS is using JetStream to persist Queue items

### Fixed

* wmbus Key Import (exchange platform) use start param

## v1.97.1 - 2024-03-28

### Added

* Integration Individual Log Limits for Success and Error

### Changed

* Deivces are not cached during uplink handling (Config: Database.Cache.deviceExpirationSec)

### Fixed

* Stop startup of nats client when other service failed

## v1.97.0 - 2024-03-26

### DB Migrations

* **ATTENTION**: Contains long running DB transformation (on startup)
    * Migrations: 74

### Added

* Uplinks can be searched by their type
* Uplinks can be filtered by created_at date
* Slow Queries are now also logged in JSON
* MQTT Integrations: Configurable Timeout
* MQTT Integrations: Do not log executions option
* HTTP Integrations: Do not log executions option
* Configureable Ratelimit for Integration execution logging

### Changed

* Removed quotes from text based logging
* Device Type bulk operation entries link to the device's respective data page, as is the default for other device tables.
* Default Timeout for MQTT Integrations is now 10 seconds

### Fixes

* JSON Log Format was not printing some fields

## v1.96.5 - 2024-03-12

### Fixed

* nats pending item metrics now published

## v1.96.4 - 2024-03-10

### Fixed

* Cron runner for some nats metrics was not running

## v1.96.3 - 2024-03-07

### Added

* Metrics for NATS pending messages nats_handle_device_uplink_pending, nats_integrations_pending

### Changed

* Removed metric integration_queue_seconds
* Table headers use no caps to make german umlaut better readable
* Prefill device type when calling import from device page
* Updated mbus parser lib to v1.7.0

### Fixed

* Fixed a bug where a moving devices into another organisation via the bulk operation would display failed operations as successful
* Device bulk operations from suborgs into parent/base org now work as expected

## v1.96.2 - 2024-03-04

### Fixed

* handle_integrations_seconds was not available

## v1.96.1 - 2024-03-04

### Added

* Config parameters to set the amount of queue workers: nats.UplinkHandlerWorkers and nats.IntegrationHandlerWorkers

### Fixed

* Limit parallel execution of integrations
* Do not shutdown platform when parser times out during heavy load

## v1.96.0 - 2024-02-27

### Added

* wmbus Parser updated to v1.6.4
* wMbus key management allows to search for meterId and manufacturer at the same time

### Changed

* new button design for wMbus key management
* Optimized query for parsed_data uses limit of 3500
* csv import of wmbus keys is now more reliable

## v1.95.3 - 2024-02-27

### Fixed

* problem with temporary keys in organisation wmbus Keystore.
* Language selection based on two digit language code (ISO 639), ignoring possible following country code (ISO 3166). E.g.: 'en-US' will be read as 'en'
* Link to hardware Activationpage in the top navigation for guests/not logged in users

## v1.95.2 - 2024-02-24

### Fixed

* added missing default store middelware to mbus handler stack

## v1.95.1 - 2024-02-24

### Added

* wmbus key store usage on wmbus api in frontend

### Fixed

forgotten label on prometheus statistics increment that could lead to panic

## v1.95.0 - 2024-02-24

### Added

* loggedin Users (frontend and API used with token) can now use their organisations wmbus key store when using the wmbus API
* Configurable amount of workers for parser

### Changed

limited parallel computing of wmbus API requests

## v1.94.4 - 2024-02-21

### Added

* prometheus monitoring for NATS Queues
*

### Changed

* Optimization to reduce runtime of getParsedDataForOrg call via rest endpoint

## v1.94.3 - 2024-02-20

### Fixed

* Fixed nil pointer issues in the optimization of long-running queries in the data tab

## v1.94.2 - 2024-02-20 - SKIPPED DUE TO BUILD PROBLEMS

### Changed

* Optimization to reduce runtime of some long-running queries in the data tab

## v1.94.1 - 2024-02-19

### Changed

* Updated to GoLang v1.22

### Fixed

* Data Tab did not load table config

## v1.94.0  - 2024-02-15

### Changed

* MBus lib: Update to 1.6.3
* Otto JS runtime enviroment update to 0.3.0

### Fixed

* sanitizing of unusual quote marks in downlink text input

## v1.93.1  - 2024-02-14

### Reverted

* Otto JS runtime enviroment update

## v1.93.0  - 2024-02-09

### Added

* Firmware page: copy downlink json button for common used firmware
* log functions for js parsers
* updated to otto 0.3.0
* Sanitize „,“ literals in downlink text input with " literal to avoid parsing errors.

### Changed

* Updated Otto JS Runtime to v0.3.0
* KeyExchangePlatform: Use API v2
* KeyExchangePlatform: Display progress of key import
* Improved performance of Data Page

### Fixed

* Creating new hardware for a device type that is private produced an invalid validation error
* Fixed infinite spinner in device types data, when no data was returned from the server

## v1.92.0  - 2024-02-02

### Added

* mbus Lib v1.6.2

### Changed

* on shutdown after Otto infinity loop input data are logged to enable debugging.

## v1.91.1 - 2024-01-29

### Fixed

* coap handler: binary firmware updates total calculation offset of 1 fixed

## v1.91.0 - 2024-01-31

### Added

* Filter for default columns in device table
* binary firmware files over coap now have address query Param

## v1.90.0 - 2024-01-26

### Added

* Basic support for binary firmware files over coap, e.g. for modem firmware updates

### Changed

* DeviceType Import: current organisation is now preselected

### Fixed

* Firmware Cache removes file when deleted.

## v1.89.0 - 2024-01-22

## Added

* Platform can now receive lobaro WMBUS Gateway uploads over MQTT

## v1.88.2 - 2024-01-19

## Fixed

* Issuses with the Lansen gateway information (MQTT topic LAS/W/I)

## v1.88.1 - 2024-01-19

### Changed

* Device Type Selectors now can display up 25 matching device types
* Search for device types now also looks for device type ID

## v1.88.0 - 2024-01-16

### Changed

* updated to GoLang v1.21

### Added

* Platform can now receive Lansen WMBUS Gateway uploads over MQTT

## v1.87.1 - 2023-12-19

### Fixed

* Missing store in context of async integrations

## v1.87.0 - 2023-12-19

### Changed

* Lobaro wMbus Api v1.5.14
* org-admins can now also create, reschedule and delete downlinks for devices in their organisation

## v1.86.0 - 2023-12-14

### Added

* Allow usage of shorter default RealData keys for parsing appropriate wMBus telegrams
*

### Fixed

* Creating new hardware for a device type that is private was not possible

## v1.85.0 - 2023-12-12

### Changed

* Lobaro mBus Lib v1.5.13

### Fixed

* When importing a device type the data table config was set as the device table config

## v1.84.2 - 2023-12-11

### Changed

* JSON Logging Environment variable is now: `LOB_JSON_LOGGING`
* Also use structured logging for first line of log output when enabled

## v1.84.1 - 2023-12-11

### Note

* Broken release!

## v1.84.0 - 2023-12-07

### Added

* Device Type Config Properties can be reordered
* Tags can be searched in the Device page
* Server logging in JSON format

### Fixed

* DeviceDetailPage link to devices page in header fixed
* GraphQL Broken escaping for field value in custom filters
* Broken Top Navigation after login/logout/user change

## v1.83.0 - 2023-12-04

### Added

* Czech language
* Device Type Import

## v1.82.1 - 2023-11-9

### Fixed

* Fixed error on GQL Device endpoint for devices that are not attached to a organisation

### Changed

* Suborg Statics and Page are no longer shown in Orgs without suborgs/the right to have suborgs

## v1.82.0 - 2023-10-24

### Added

* Device Usage Statistics can now be closed in an accordion with a persistant state

## v1.81.2 - 2023-10-23

### Fixed

* Fixed view downlink list was not possible when org_admin was viewing devices in a suborg

## v1.81.1 - 2023-10-08

### Fixed

* Fixed statistics now include devices from parent and sub orgs
* Fixed a bug where device data could not be sorted by field
* Updated permissions to allow admin, orgAdmin and deviceAdmin to create device downlinks
* Fixed a bug where searching devices via their comments failed when the device comment was used to store id like strings (e.g. serial numbers)
* Fixed a bug where the test input of a device setting did not show the latest device data and did not update after an uplink was simulated
* When paginating devices that have no last received date, an arbitrary order (by internal id) will be used to preserve the pagination order

### Added

* Added "Organisation" selection to Device Settings Page

## v1.81.0 - 2023-10-02

### Fixed

* fixed creating new users as non-admin, where a maxUsers limit was falsely shown to be reached
* fixed updating the maxUser limit of an organisation
* fixed a typo in the device-type copy resolver, that copied the 'data table config' into the 'device table config'
* fixed a bug where subOrgs could not be displayed when an admin selects subOrgs in the devices page
* fixed typos in german translation

### Added

* REST Endpoints for http integration management
* Inform user about amount of ignored keys when importing from exchange platform

### Changed

* REST API: added panic catching middleware with extended logging on rest API handlers.
* create a device tag when focus is lost on the device/settings page

## v1.80.3 - 2023-08-19

### Fixed

* Allow org-admin to switch bach to own base organisation

## v1.80.2 - 2023-08-18

### Fixed

* typo that lead to error on devices Page

## v1.80.1 - 2023-08-18

### Fixed

* organisation edit in device settings
* admins impersonating users can have problems with no longer assacibile scope for devices set
* error on wmbus key edit.
*

### Changed

* DeviceType Parser: Removed feature for "default" selection

## v1.80.0 - 2023-08-15

### Added

* Example configuration is automatically generated with comments and default values
* Device import on Devices Page in organisation
* Configuration parameters for CoAP and CoAPs ports
* CompactFrame Table: cut Values decimal places to exponent precision
* Copy DeviceType feature

### Changed

* wMbus AES Keys can now be displayed with masked middle
* Devices Pages saves scope and selected device type in local storage
* Removed unused components like customer specific prototypes

### Fixed

* CertEnforceDtls only blocks requests without cert
* fixed some frontend issue with wmbus key import from key exchange platform

## v1.79.1 - 2023-07-14

### Fixed

* Org Admin can access device page

## v1.79.0 - 2023-07-13

### Added

* Bulk operation supports to change device organisation
* Device Table can now display devices from scope: Organisation, Organisation With Suborgs and Global
* search for empty meterId and manufacturer in WmbusKey Table
* added is isnull filter for "is null" and "is not null" searches in filter API/GQL-filter

### Changed

* Only admins can change the address of existing devices
* Updates wmbus parser to v1.5.12 to fix parsing of Zenner invalid values

## v1.78.1 - 2023-07-05

### Added

* **ATTENTION**: Contains long running DB transformation (on startup)

### Fixed

* Nats monitoring endpoint was not working
* Properly handle server shutdown, do not hang up
* Start monitoring immediately after startup and do not wait 30 seconds

## v1.77.0 - 2023-06-29

### Added

* device certificates can now be deleted by admins/orgadmins/device-admins
* Device DTLS Certs can now be deleted by admins, org-admins and device-admins
* UsageStatistics Cron worker now also reports into the CronLog.

### Changed

* Actility datasource now uses network-server tokens, disabled old datasource concept in apps
* Update mbus parser to v1.5.10 to fix compact profiles with invalid values

## v1.76.0 - 2023-06-22

### Added

* device usage Statistics

### Changed

* retry mechanism for configuration downlinks on coap endpoints

### Fixed

* dont display Hardware Activation Link under "Ogranisation" when Featureoggle is disabled
* routing for Hardware Activation
* browser back button on pages with redirects

## v1.75.4 - 2023-06-13

### Added

* helpfull error message on failed wmbus key imports

## v1.75.3 - 2023-06-06

### Added

* wmbus LIB v1.5.9
* DbStats for prometheus metrics

### Fixed

* detail pages in Configuration now also highlight the correct navigation item
* missing edit button on max Sub Orgs for admins of Parentorganisation

## v1.75.2 - 2023-06-02

### Fixed

* cpu usage statistics for prometheus metrics

## v1.75.1 - 2023-06-02

### Added

* cpu usage every 10sec sampled for prometheus metrics

## v1.75.0 - 2023-06-01

### Added

* Monitoring Service with host stats for Prometheus Metrics

## v1.74.0 - 2023-05-31

### Added

* Key import from Key Exchange Platform

## Fixed

* prohibit wmbus_key manufacturer entry to become empty string instead of null

### Changed

* Update to Go 1.20
* extend coap/coaps prometheus monitoring

### Fixed

* error page on password reset

## v1.73.0 - 2023-05-18

### Added

* Lobaro Mbus Lib v1.5.6

### Fixed

* SensusRF Keys were not found on parsing in Key Store

### Change

* move from github.com/dgrijalva/jwt-go to github.com/golang-jwt/jwt
* removed no longer used last Keycloak auth features

## v1.72.0 - 2023-05-16

### Added

* SubOrganisations in tenant management
* API Endpoints for deletion of Devices ParsedData and SensorData

### Fixed

* Configuration Area: Broken Firmware Upload Form
* navigation bar is not shown after login

## v1.71.9 - 2023-04-17

### Changed

* Update wMbus Parser to v1.5.5
* remove broken DeviceTable Edit from Device Table Page
* Using "Clear" on Table Config editor now clears config but doesn't save clear action directly

### Fixed

* Search for data table fixed when searching for a prefix e.g. 'my prefix*'
* Format errors in logs
* Hardware Activation detail page was not loading
* Create hardware activation
* Create device type without Organisation

## v1.71.7 - 2023-04-05

### Changed

* removed sensitivity in wmbus key import table search

## v1.71.6 - 2023-04-05

### Fixed

* unneeded re-renderings and double query execution on Data Table

## v1.71.5 - 2023-04-04

### Fixed

* DeviceType Parser in Device Parser Editor

## v1.71.4 - 2023-04-03

### Fixed

* mixups in Parser Editor
* Path problems in configuration area that lead to error page
* missing navigation highlighting

## v1.71.3 - 2023-03-30

### Fixed

* error on search for Wmbus_Keys with long Sensus Device Id.

## v1.71.2 - 2023-03-28

### Changed

* some more improvements for wmbus_key refactoring

## v1.71.1 - 2023-03-27

### Added

* update to wmbus Lib v1.5.4
* Additional saftey in wmbus_keys transformation

## v1.70.2 - 2023-03-19

### Added

* Dragino TCP Endpoint for NB-IoT at port 5600
* CoAP .well-known/core endpoint

### Changed

* wMbus API parameter "ident" renamed to "indent" as it was meant to be
* removed bloated debug log that was introduced in v1.61.7

## v1.70.1 - 2023-02-15

### Added

* wmbus LIB v1.5.3

### Fixed

* out of index error in parser for lansen v3 co2 sensors

## v1.70.0 - 2023-02-01

### Added

* wmbus LIB v1.5.2

## v1.64.1 - 2023-01-30

### Fixed

* race condition in HTTP integration that lead to "context canceled" before msg was published over http

## v1.64.0 - 2023-01-17

### Changed

* MBUS Lib updated to v1.5.1
* HTTP integrations now run asynchronous in background
* CompactFrame now uses EU Date Format.

### Fixed

* long running http integration blocks COAP call
* white labeling on swagger API documentation improved

## v1.63.0 - 2022-12-07

### Added

* wmbus LIB v1.5.0
* CompactProfile Support

### Changed

* Domain Model endpoint meterData will work with empty body and use default Configuration from mbus lib

### Fixed

* missing fields in Device Export

## v1.62.1 - 2022-11-25

### Added

* Timezone feature for date Handelbar helper
* Support TimeString and Epoch in Handelbar date helper

## v1.61.7 - 2022-11-23

### Fixed

* fixed mbus parser error on to short key ids in organisation key store.

## v1.61.6 - 2022-11-23

### Fixed

* Out of Index error on humanize of Lansen Co2 Meters with failed decryption.

## 1.61.5 - 2022-11-18

### Fixed

* moved lobaro-cron-validate dependency from github to npm repo
* DeviceConfig: lobaro-cron-validate to support L and W (as Lists) on

## v1.61.2 - 2022-11-15

### Added

_ wmbus LIB v1.4.2

* wmbus: Lansen Co2 Sensors added DB Ambience level to DomainModel
* meaningful error on decryption failure for DomainModel

### Fixed

* DomainModel: fixed missing MeterId for Multisensors (in specific: Lansen CO2)

## v1.61.1 - 2022-11-04

### Added

* wmbus: Lansen Co2 Sensors added DB Ambience level to DomainModel

### Changed

* wmbus Parser Lib updated to v1.4.1

## v1.61.0 - 2022-11-04

### Added

* wmbus: Subunit is now displayed for wmbus telegrams
* wmbus: Lansen Co2 Sensors are now supported by he DomainModel

### Changed

* wmbus Parser Lib updated to v1.4.0

### Fixed

* wmbus: SubUnit and Tariff

## v1.60.0 - 2022-10-13

### Added

* CONFIG CHANGES FOR DTLS CERTS NEEDED (see changed)
* Mqtt Integration now also displays the publishInformation for the last execution where an error occurred
* Cron validation support for: Last Day Of Week (L for Weekday), Nearest Week Day (W for weekday param), Last Day Of Month (L and L-x for day of month param)
* support for raw downlinks over coap to Lobaro NB-IoT Devices
* Link Device Type in Device Header (on Device pages) with Device Type page
* Device Bulk operation: Export Hardware csv for devices

### Changed

* wmbus Parser Lib updated to 1.2.3
* removed config Value featureToggle.dtlsSecureCoapServiceEnabled
* SecureCoapService is now started when server.dtlsConfig.dtlsCertDir and server.dtlsConfig.dtlsCertDir are set
* Removed server.dtlsConfig.dtlsCertDir and server.dtlsConfig.dtlsCertName no longer have default Values

### Fixed

* double 0x-prefixon wmbus Device Type at Application Layer for long header

## v1.59.0 - 2022-10-05

### Added

* Rest API: update Device
* Fields to copy&paste GPS location for devices

### Fixed

* MQTT Integration UI: fix empty string displayed as QosByte instead of 0
* MQTT Integration UI: edit on Retained Flag not saved correctly

## v1.58.1 - 2022-09-30

### Fixed

* GQL Schema for build

## v1.58.0 - 2022-09-30

### Added

* Added QosBytes and retained Flag to MQTT integrations

### Changed

* DeviceType "makePrivate" now sets Org automatically if no org is set on deviceType

## v1.57.0 - 2022-09-23

### Added

* delete device endpoint in REST API
* org bulkoperation: change devicetype

### Fixed

* CSV-Export of Devices from DeviceTable had no access to device properties
* Org-Admin cant edit DeviceType Parser and Tables of own deviceType (private)

## v1.56.0 - 2022-09-20

### Added

* wmbus key store can now contain MFields as "Meter Id" so the key is used for all devices of a manufacturer

### Fixed

* wmbus key import from csv destroyed entrys with "*" als Meter Id
* removed Unknown property '_grid' for div component in Grid Component because it caused react/no-unknown-property rule to fail builds

## v1.55.0 - 2022-08-09

### Added

* ATTENTION: Contains DB Transformations
* Display Telegram Types on uplinks
* more translations

### Changed

* sharped private device types
* unique Device Addr (DB transformation can interrupt startup on failure!)

## v1.54.1 - 2022-08-09

### Added

* configurable ConnectionPool limits for Gorm DB Connection
* added LastError Information for HTTP integrations

## v1.54.0 - 2022-08-09 [YANKED]

### Added

* configurable ConnectionPool limits for Gorm DB Connection
* added LastError Information for HTTP integrations

## v1.53.1 - 2022-08-05

### Changed

* Updated mbus Parser to v1.2.2
* mbus Parser: Support for wired M-Bus Headers
* mbus Parser: Support for Enhanced Identification Block

### Added

* MQTT Integrations can now listen for downlinks over MQTT
* Handlebars "replace" helper
* Handlebars config helper
* Replay Device Data feature

### Fixed

* org-admins can create password reset links and change pws of users (in same org)
* org-admins can send password set emails for users (in same org)
* fixed redirect on user creation in organisation menu

## v1.52.2 - 2022-07-28

### Changed

* also sort devices table by deviceType on "last received"

## v1.52.0 - 2022-07-25

### Added

* Chirpstack join info as uplink
* "in" operator for filters (text elem in array)

### Fixed

* Filters for the Devices Table from the Device Table Configuration of DeviceTypes
* Import of big hardwareCSV files

## v1.51.1 - 2022-07-04

### Added

* max User Limit for organisations (first steps)
* lorawan downlinks

### Changed

* API Tokens now can have the Roles Device-Admin and Org-Admin.

### Fixed

* removal of device ConfigValues removes them from the initial config also
* base64 encoded telegrams are correctly handeled by the frontend now

## v1.49.0 - 2022-06-20

### Added

* config values that are not part of deviceType schema can be removed from device

### Fixed

* wmbus Parser page: Base64 telegrams are now converted to base64url to fix parsing on base64 telegram with +,/ and =
* broken password change on password change page
* password could get broken by Ampersand on transport

## v1.48.0 - 2022-06-15

### Added

* org admins can create and manage users in their organisation

### Fixed

* Firmware Management page: missing refetches, unwanted uuid in file name is no longer added

## v1.47.0 - 2022-06-13

### Added

* Bulk creation of Downlinks for Devices.
* Firmware File Management (upload/deletion..) page for Platform Admins
* Api Endpoints for device and user creation

### Changed

* Selection box at top of Table now always adds all unmarked elements to exiting selection

## v1.46.2 - 2022-05-18

### Fixed

* Fix blockwise transport with coap server v2.5.0k

## v1.46.1 - 2022-05-18

### Changed

* updated mbus parser for MüllerRF bugfixes

## v1.46.0 - 2022-05-18

### Added

* parser support for "mbus" and "MüllerRF" frames

## v1.45.2 - 2022-05-13

### Fixed

* Blockwise CoAP upload by rolling back to coap server v2.3.0

## v1.45.1 - 2022-05-11

### Added

* Added gzip compression support to REST API and GraphQL
* Allow integrations to access device Serial, Id, Name, Addr, and OrgId in URL / Topic

## v1.43.2 - 2022-05-09

### Changed

* increase default and max pagination limit to 100.000

### Fixed

* csv download uses pagination

## v1.43.1 - 2022-05-08

### Fixed

* fix localization files path

## v1.43.0 - 2022-05-06

### Changed

* enforce max Page size of 1000 items
* use of default page size when no pagination config is supplied on request

## v1.42.0 - 2022-05-05

### Added

* language files will be loaded from filesystem on startup

## v1.41.2 - 2022-05-04

### Fixed

* api param `ident` corrected to `indent`

## v1.41.1 - 2022-05-03

### Changed

* update mbus lib to fix parsing of invalid and negativ BCD numbers

## v1.41.0 - 2022-05-02

### Added

* pprof endpoints

### Changed

* pass context of gql query to gorm for big querys so gorm can cancel execution in ctx.Done
* updated GqlGen to v0.17.5
* Log Warning on querys with more than 10.000 results
* Error on Querys with more than 100.000 results

### Fixed

* Missing page parameter in initial query org/device/parsedData
* high memory consumption during CoAP fw update

### Added

* added ident param to endpoints of REST API

## v1.40.1 - 2022-04-28

### Added

* added ident flag for api/mbus

### Fixed

* frontend crash on device tag edit

## v1.40.0 - 2022-04-28

### Added

* DatasourceString so the technical source of a Uplink can be identified
* Users can be deleted by admins

### Changed

* Org is now required on user generation
* improved space for dropdown selection in user creation modal

## v1.39.0 - 2022-04-25

### Added

* DTLS: configure if a device can fallback to unsecure coap in frontend
* trim white spaces in config values

### Changed

* new mbus Parser Lib version (1.0.0) with fixed Storage Numbers

## v1.38.0 - 2022-04-25

### Added

* roles field in user creation modal

### Changed

* login is set to email address for new users
* Change color of admin role pills to red background
* Fallback to nonsecure DTLS can be allowed for device

### Fixed

* scrollbar for org chooser in user creation modal is presented for long org lists
* DTLS: Lost updates on device (config/properties) for all Messages beside the last one on dtls connection

## v1.37.0 - 2022-04-21

### Changed

* update CoAP implementation to v2.5.0
* adjusted flight time for dtls handshake

## v1.36.0 - 2022-04-20

### Added

* basic prometheus statistics for GraphQL API

### Changed

* updated PION DTLS to v2.1.3 to fix potential deadlock bug

## v1.35.0 - 2022-04-19

### Added

* Added TLS support for MQTT integrations
* Allow Variable Substitution in MQTT Topic

### Changed

* Update to GoLang 1.18

### Fixed

* MQTT publish leads to DB update error without information

## v1.34.0 - 2022-03-29

### Changed

* make Database sslmode configurable

### Fixed

* improved cron evaluation

## v1.33.1 - 2022-03-24

### Changed

* removed possible logging of Auth Header at TTN endpoint

### Fixed

* look in to forwarded for Header Entry for mbus API requests IP ratelimeting

## v1.33.0 - 2022-03-23

### Added

* count Access by IP on mbus API
* monitor push integrations (mqtt/http) with prometheus
* favicon can be configured in branding configuration
* Device Config Form: config values with type CRON are now validated an error displayed on invalid crons
* Translate hardcoded column names in global "Data" table

### Changed

* distinguish timeout and error returned by parser in parser monitoring
* removed AppLauncher in Top Navigation

## v1.32.1 - 2022-03-04

### Changed

* Change DTLS config to request Extended Master Secret, instead of requiring it.
* Wrap Pion-Logger to Logrus, so that messages from DTLS-lib show up in log.

## v1.32.0 - 2022-03-01

### Changed

* COAP FW update: Use file table to look up files instead of metadata from filesystem

### Added

* Prometheus statistics for COAP Endpoint Runtimes and JS Parser Runtime
* role "monitoring" protect prometheus endpoint with auth for admin or monitoring role

### Fixed

* crash on sort click in Tables without default sort (data table)
* DTLS parse EUI64 from device if EUI64 URN is presented instead of fail because of wrong IMEI URN

## v1.31.0 - 2022-02-17

### Added

* new mbus Parser Lib Version can parse EiElectronics Smoke Detector HeadStatus content
* On Panic in go-coap handler routine give Internal Server Error to client instead of killing the routine

### Fixed

* sort no longer breaks on multiple change of sort direction

### Changed

* Logg "Handle CoAP request" only as Debug because it spams the log

## v1.30.0 - 2022-02-08

### Changed

* Updated to Go lang 1.17.6
* Updated gqlgen and some other dependency's for Go Lang 1.17 update

## v1.29.2 - 2022-02-07

### Added

* Show number of devices in organisation

### Changed

* CSV Imports (Keys, Hardware, Config Values) now skip empty lines in the csv file
* Devices in Organisation Device List are now sorted by Last Received (descending)

### Fixed

* fixed bug that prevented admins to see the overview of devices without an organisation
* CronLog issues
* sort in tables never sorted descending on default sort

## v1.29.1 - 2022-02-02

### Added

* API Endpoint for MeterReading Domain Model

### Fixed

* Link to devices Types from Admin hardware Page

## 1.29.0 - skipped due to problems with build

## v1.28.1 - 2022-01-14

### Added

* Http Integration: Validate Token and add hint if "Bearer " needs to be removed

### Changed

* remote device Config: truncate Spaces on Import from CSV

### Fixed

* even admins where permited to update global device types

## v1.28.0 - 2022-01-12

### Added

* array Filter Operators for GraphQL Querys with filter added
* schedule uplink button at top of device config table
* REST API: Admin Endpoints for API Token Creation and Deletion
* REST API: GetDeviceDownlinks

### Changed

* only admins can see admins in organisation user List

### Fixed

* DTLS COAP: Fixed blocked accept() on dtls Listener after connection close by Handshake timeout and use of Multiple Threads.
* Filters where no longer applied after table page was changed
* show usefully hint instead of JS error when user opens detail page of non exiting device or device he is not allowed to inspect
* DeviceType Config Properties: Display Name no longer marked as required
* UpdateDeviceType bug fixed: Orgadmins cloud not update private Device Types
* wrong and annoying autofocus in downlink editor.

## v1.27.2 - 2021-12-16

### Added

* 25h caching for Firmware files

### Fixed

* SensusRF Ids will no longer spam the log as "invalid mbus id"
* Housekeeping: fixed logging that can lead to nil pointer dereference
* wmbus Data fixed some ugly UI case with missing new line
* Integration Filters with empty Device Type List displayed all Device Types in frontend

## v1.27.1 - 2021-12-02

### Fixed

* Housekeeping changed wrong DB Column Types in CronLog Table

## v1.27.0 - 2021-12-01

### Added

* Added Housekeeping for SensorData and ParsedData

### Changed

* JS Parser timeout default increased to 250ms and timeout is now configurable.

### Fixed

* Hadware Activation: correction of initialConfig=null handling

## v1.26.1 - 2021-11-30

### Added

* Undocumented REST endpoint to schedule downlinks `POST /api/devices/{devId}/downlink?type=raw`

## v1.26.0 - 2021-11-30

### Added

* Support for Tekelek downlinks via TCP/IP

## v1.25.0 - 2021-11-15

### Added

* Support to filter array fields from REST API e.g. devices by tags

## v1.24.0 - 2021-11-12

### Added

* Filter for MQTT Integrations

### Fixed

* Fix TTN Integration Base64 decoding

## v1.23.0 - 2021-11-04

### Added

* Cert registration for Lobaro Devices
* MeteringData for wmbus devices

## v1.22.3 - 2021-10-15

### Added

* wmbus: Display Decrypted Raw Body on telegrams where Body can not be parsed yet

### Fixed

* Device Configuration CSV Import: Fixed that Header Column was also imported as value

## v1.22.0 - 2021-10-11

### Added

* Reschedule downlinks
* Deletion of queued downlinks

### Fixed

* Wrong Regex prevented to add SensusRF keys with SensusRF meterId.

## v1.21.0 - 2021-10-11

### Added

* New Role "Device Admin" that is allowed all operations at devices of his organisation
* Descriptive Name Column for Device configuration properties
* Feature Toggle to configure if wmbus Parser API is public
* Enabled users to change the language manually in frontend
* Admins can create Downlinks with arbitrary JSON Data content.

### Changed

* show more details about messages that cant be parsed (header/payload unparsable)
* enhanced sftp Integration logging
*

### Fixed

* fixed some small UI details
* Device -> Settings -> Parser displays the parser correctly again

## v1.20.0 - 2021-09-30

### Added

* wmbus keys CSV import: hints and example file
* SFTP Integration: Group By Device Tags
* wmbusParser Api Tab Feature Toggle

### Fixed

* Use of Filter and Sort in Parsed Data Tables could lead to lose if Filters
* some translation errors (DE Translation)

## v1.19.5 - 2021-09-28

### Fixed

* missing german translations
* Device config cancel button behaviour
* API authentication for a customer specific endpoint

## v1.19.4 - 2021-09-24

### Added

* translation for mouseover text on battery symbol

### Changed

* User tables now contain the list of roles given to the user

### Fixed

* CSV import of wmbus AES Keys

## v1.19.3 - 2021-09-23

### Added

* Long header information are now displayed in wmbus detail component
* feature toggle: hardware activation
* header column in config value csv import is now optional by user choice

### Fixed

* bugs that lead to keys missing after key import from csv

## v1.19.2 - 2021-09-20

### Changed

* Qundis Proprietary telegrams are now marked as such

### Fixed

* Data Tables now show BodyParseErrors on wmbus Detail component

## v1.19.1 - 2021-09-19

### Added

* Battery Symbol in Organisation "All" Devices overview

### Fixed

* bugs on sftp integration (front and backend)

## v1.18.3 - 2021-09-13

### Fixed

* fixed File upload in GQL (organisation Logo and so on...)

## v1.18.2 - 2021-09-09

### Fixed

* organisation key store check for App and Link Layer IDs on key search

## v1.18.1 - 2021-09-09

### Fixed

* Mode 7 Bug with short header fixed

## v1.18.0 - 2021-09-07

### Added

* Column filters for tables (text and boolean)
* Admin area: Hardware Battery page (vbat table)

### Changed

* sort/filter: dots ons property names can now be protected by quotes

### Fixed

* wahr/falsch translations in DE where mixed up

## v1.17.4 - 2021-09-01

### Fixed

* removed broken Host/URL/Ip parsing in Sftp integration.

## v1.17.3 - 2021-08-31

### Fixed

* wrong port tried by sftp integration

## v1.17.2 - 2021-08-30

### Changed

* added some missing translations

### Fixed

* auth failure for actility

## v1.17.1 - 2021-08-30

### Changed

* Reworked Parser Device.getConfig

## v1.17.0 - 2021-08-30

### Added

* Localisation Framework added to code
* German localisation added

### Changed

* Old Device Config is now accessible in the Parser

### Fixed

* Error on update of SFTP Integration fixed

## v1.16.0 - 2021-08-18

* JSParser: Device Name, Address, Serial and Tags are now accessible.

## v1.15.2 - 2021-08-18

* createMQTTIntegration fix ClientId in username

## v1.15.1 - 2021-08-16

### Added

* Device Config: Import Lists from CSV
* Added Rest Admin Endpoints

### Changed

* Added more options for selectable CRONs in remote config

## v1.14.1 - 2021-08-03

### Fixed

* nil pointer dereference bug on http Integration

## v1.14.0 - 2021-08-02

### Changed

* Gorm update

### Added

* Added Support for Compact Telegrams without DifVif FormatFrame
* Device Bulk Edit: Devices Org can be edited to no Org.
* DTLS Support for NB-IoT Devices over COAP
* Info Endpoint
* Health Endpoint added
* Tekelek devices get the suggested answer.

### Fixed

* Error on HTTP Integration Edit without Auth.
* Crash on HTTP Integration with nil response from HTTP lib.
* Device Bulk Edit: Frontend crash when device without Org is edited.
* Security issue in Rest API fixed.

## v1.13.2 - 2021-07-09

### Added

* Tekelek Device Support on TCP connection added. (Default port: 54345)

### Changed

* search for devices now considers serial

### Fixed

* some drone issues

## v1.12.3 - 2021-07-02

### Change

* dont check if dev exist for EUI assignment.

## v1.12.2 - 2021-07-02

### Changed

* updated Lobaro mbus Parser Lib to new Version

### Fixed

* error on hardware import without org fixed
* wrong visual representation for device config values of type ByteArray and value null

## v1.12.00 - 2021-06-15

### Added

* Tagging for Devices

## v1.11.17 - 2021-06-14

### Fixed

* restart Platform on service crash (like coap service and so on)
* TTN: Fix on TTN User Agent version mapping
* log config paths, name and type to be loaded

## v1.11.16 - 2021-05-26

### Added

* validate Device config Params based on Data Type in DeviceType Schema

### Fixed

* ByteArray Config Values of NB-IoT Devices are now displayed in Hex (and not in base64)

### Changed

* DeviceTypes can now be created by users.
* Enabled users to share DeviceTypes with all organisations (public/private DeviceTypes)
* wmbus Telegram Field picker for Data Table Config
* Table preview in Data Table Config

## v1.11.12 - 2021-05-11

### Added

* TheThingsNetwork V3 is now supported.

## v1.11.11 - 2021-04-26

### fixed

* integrations now forward all parser outputs (not only the last)

## v1.11.10 - 2021-04-23

### Added

* Always decreypt PulseRf devices

### Changed

* new Time Selection UI Element

## v1.11.09 - 2021-04-xx

### Added

* user list is now sortable by different values (default: lastLogin)

## v1.11.8 - 2021-04-15

### Added

* Added first version of SFTP csv export.

### Changed

* display table filter by default
* filter for data of last 90 days by default

### Fixed

* fixed some issues with the time filter in the Data Tab.

## v1.11.6 - 2021-03-31

### Changed

* Tableconfig Data Tables: Values can now be configured to be part of the csv export but not to be shown in the table.

## v1.11.5 - 2021-03-22

### Added

* Allow deletion of Properties from Device.
* Allow org Admins to delete device Data.
* Activation Page with all devices of organisation added.

### Changed

* to hex parsing for byte fields at coap endpoint deactivated for further fixing

## v1.11.4 - 2021-03-16

### Added

* Devices which have an DevEUI Assignment connected to its address now display the EUI in ther detail Headers.
* COAP Messages: byte fields in payload are now converted to hex instead of base64.

### Changed

* (wmbus)Key import from csv now pads to short keys with leading zeros
* trim whitespaces on config values so they can no longer be added accidentally

### Fixed

* corrupt cache.bin no longer crashes service on startup
* org-admin are now allowed to see users in org

## v1.11.0 - 2021-03-03

### Added

* Frontend is now delivered by lobaro backend.
* Support for NB-IoT Gateways receiving Data over lorawan with DevEUI instead if IMEI as used Address
* NB-IOT wmbus gateway devices will now receive lorawan messages also in the Device created with the IMEI as address

## v1.10.7 - 2021-02-26

### Changed

* Display Error texts instead of error mask for SensusRF

## v1.10.6 - 2021-02-18

### Added

* Support for Chirpstack Version: 3+ Api
* Chirpstack v3+ protobuf support

### Fixed

* SensusRF Padding Problem for long Serials
* fixed Bug in unconfigurable DevEUI Blocks

## v1.10.2 - 2021-02-13

### Fixed

* Display Meterdevice ID and Error Text for SensusRF parsing run without matching key

## v1.10.1 - 2021-02-12

### Added

* Registry for Lobaro (Device)-EUIs added

### Changed

* Userlist search now also includes Organisation Name
* Unused Firefly and PackageRoute Stores removed
* Unused columns and indexes removed
* Index unification over Platform instances

### Fixed

* fixed Bug preventing to delete Organisations with attached mbus keys

## v1.10.0 - 2021-02-08

### Added

* Integrate SensusRF parsing into wmbus API
* Link parsed data with uplinks

### Changed

* wmbus Parser now also supports Base64 input

### Fixed

* Improved authentication role checks

## v1.9.2 - 2021-01-25

### Added

* Serial Numbers are now imported from hardware csv and can be seen in the platform.

## 1.9.1 - 2021-01-15

### Fixed

* mqtt service startup failure

## v1.9.1 - 2021-01-13

### Added

* Endpoint for Loriot LoRaWAN Network Server at /api/loriot/data
* Configuration for server.dataDir (Default: './data')
* Branding configuration: The frontend only shows customer brand specific links, logos etc.

### Changed

* Parser cache is persisted regularly (60 seconds) and on graceful shutdown
* Parser cache is loaded from file on startup
* Parser cache file is located at `<server.dataDir>/parser/cache.bin`
* From `<server.dataDir>` dir only '/app' and '/org' folders are public via HTTP to avoid leaking other data files like the parser cache

### Fixed

* Server crash related to MQTT Publish Integration

## v1.8.7 - 2020-09-29

### Added

* last login field for user

### Fixed

* Server now using CoAP port from config
* Server does depend require Keycloak during startup

## v1.8.5 - 2020-09-08

### Fixed

* Deduplication of CoAP messages for blockwise requests

## v1.8.4 - 2020-09-02

### Fixed

* Index row size for device textsearch was too big

## v1.8.3 - 2020-08-28

### Added

* REST API to update device configurations: `/api/devices/{devId}/config`
* REST API to fetch all parsed data of all devices inside an organisation: /api/devices/parsed-data
* HTTP Integration now supports URL Variable substitution for the device ID via `{device.id}` and data via `{data.some.value}`
* Internal API and Schema for integration input filters
* BasicAuth credentials for API Tokens as alternative authorization mechanism in the REST API

### Changed

* Update to latest version of mbus parser to fix description issues with some telegrams
* Drop unused database tables and APIs from legacy projects

## v1.7.0 - 2020-06-04

### Added

* Allow sending user invitation mails with password reset link
* Allow user to restore a lost password
* GraphQL API: Devices can be filtered by DeviceTypeId
* Verify that server.frontendUrl is set in configuration
* Add TTN REST Endpoint /api/ttn/data

### Changed

* Prevent spaces in device addresses

## v1.6.0 - 2020-04-09

### Added

* Allow org-admin to edit wmbus Keys
* Allow org-admin to upload organisation logos
* Documentation for REST API endpoint `/api/devices`
* Parser: Record.getReceivedAt() to access the uplink message received_at date

### Changed

* Chirpstack device synchronisation reports more details

### Removed

* Gateway entity that is no longer used
* Hardcoded MQTT publishers that are no longer used

### Fixed

* Allow to remove App in device via GraphQL API
* NB-IoT Data is saved for all matching devices, not just one
* Downlink messages created_at was set to null after update
* Allow to update config values that are not defined in Device Type
* Allow org-Admin to edit wmbus Keys

## v1.5.0

### Added

* Synchronization of devices with Chirpstack