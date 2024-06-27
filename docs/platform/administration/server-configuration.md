# Server Configuration

:::info[Required roles]
Server Admin (ssh access required)
:::

Each value is loaded from different locations (highest priority first, e.g. 1. overrides 2.):

1. Environment variables
2. Config File
3. Command line Flags
4. Default values

## Commandline and Environment Variables

Some options are only available via Environment Variables

| Environment Variable | Commandline parameter | Description                                                  | Version   |
|----------------------|-----------------------|--------------------------------------------------------------|-----------|
|                      | --config              | Defile path of config file (default:lobaro-iot-platform.yml) |           |
| LOB_JSON_LOGGING=1   | --json_logging=1      | Enable JSON Logging                                          | >= 1.84.1 |

## Configuration File

```toml
# This is an generated example config file for the Lobaro Backend
# On production systems you can change the default values as required

# Enable debug log output
Debug = false
# License key for the Lobaro Backend to unlock certain features
License = ''
# TCP port for Tekelek devices
TekelekTcpPort = 54345
# TCP port for Dragino devices
DraginoTcpPort = 5600
# DevEUI Blocks for Hardware Provisioning
DevEUIBlocks = []

# Frontend HTTP Server Configuration
[Server]
# Frontend URL without trailing slash (not needed when using a single domain)
FrontendUrl = ''
# Port to listen on, deprecated in favour of Bind. When Bins is set Port is ignored
Port = 0
# Address to bind to, e.g. :8082
Bind = ':8082'
# Enable development mode. Not safe for production!
# Authentication might be disabled.
DevMode = false
# Token secret to encrypt API Tokens. When changed, all existing Tokens are invalidated.
ApiTokenSecret = ''
# Token secret to encrypt User Tokens. When changed, all existing Tokens are invalidated.
OauthTokenSecret = ''
# Token secret to encrypt User Refresh Tokens. When changed, all existing Tokens are invalidated.
OauthRefreshTokenSecret = ''
# Directory where all file based data is stored
DataDir = './data'

# DTLS Configuration, used by CoAPs Server
[Server.DtlsConfig]
DtlsCertDir = ''
DtlsCertName = ''
AcceptPoolSize = 10000

# Customer specific branding configuration
[Branding]
PlatformName = 'IoT Platform'
FrontendBaseUrl = ''
DefaultLogoUrl = '/static/branding/logo.svg'
LegalDisclosureUrl = 'https://www.lobaro.com/contact/'
ParserDocUrl = 'https://doc.lobaro.com/x/Y4B5'
DisplayDocLinks = true
IntegrationDocUrl = 'https://doc.lobaro.com/x/YIB5'
AllowRegistration = false
Favicon = '/static/img/favicon.ico'

# Deprecated: use BrandingConfig
[Whitelabel]
PlatformName = ''

# Postgres Database Configuration
[Database]
Database = 'postgres'
# Schema for the database, default is public. If empty string the search_path will be determined by the db
Schema = 'public'
Username = 'postgres'
Password = 'admin'
Host = 'localhost'
Port = 5432
SslMode = 'disable'
MaxOpenConns = 90
MaxIdleConns = 20
# Enable debug log output for the database
Debug = false
AutoFixMigration = false
# Threshold for slow queries in milliseconds
SlowQueryThresholdMs = 5000

# Cache Configuration
[Database.Cache]
# Expiration time for the device cache in seconds, 0 = no cache
DeviceExpirationSec = 600
# Disable the local cache
LocalCacheDisabled = false
# Expiration time for the local cache in seconds
LocalCacheExpirationSec = 3600
# Purge time for the local cache in seconds
LocalCachePurgeSec = 3600

# Email Server settings
[Email]
Server = ''
Tls = false
Username = ''
Password = ''
Sender = ''

# CoAP(s) Server Configuration
[CoapServer]
# CoAP port
CoapPort = 5683
# CoAPs port
CoapsPort = 5684

# Digimondo Platform specific settings
[Digimondo]
ApiKey = ''

# MQTT Broker Configuration for outbound MQTT Integrations
[Mqtt]
Name = ''
ClientId = ''
Broker = ''
Username = ''
Password = ''

# Internal MQTT Broker Configuration
[MqttBrokerConfig]
StartBroker = false
AdminUsername = 'admin'
AdminPassword = 'admin'
# port used for broker
Port = 1883

# DevEUI Provisioning Configuration
[DevEUIConfig]
# When set to true, the server will assign a new DevEUI when a device with that DevEUI already exists in the platform
CheckDeviceExistOnNewEui = false

# Allows to enable/disable single features
[FeatureToggle]
HardwareActivationEnabled = true
WmbusParserApiTabEnabled = true
WmbusParserApiPublic = false

# JavaScript Device Parser Configuration
[Parser]
TimeoutMs = 250

# Device Data Storage related Configuration
[Data]
DefaultRetentionDuration = ''

# Organisation related Configuration
[Organisation]
DefaultUserLimit = 0
DefaultMaxSubOrganisations = 0
MaxDepthSubOrganisations = 10

# NATS related Configuration. NATS is used as the internal Message Broker
[Nats]
# Start the internal nats server, host has to be localhost then
StartNatsServer = true
# NATS server hostname or IP address to connect to
Host = 'localhost'
# NATS server port to connect to
Port = 4222
Username = 'admin'
Password = 'admin'
HTTPPort = 8222
# Enable NATS for CoAP and CoAPs datasource
EnableCoapDatasource = false
# Size of the NATS client pool for publishing messages
ClientPoolSize = 1000
# Hostname or IP address of the config companion
ConfigCompanionHost = 'localhost'
# Port of the config companion
ConfigCompanionPort = 8099
# Number of workers for the uplink handler queue
UplinkHandlerWorkers = 2
# Number of workers for the integrations queue
IntegrationHandlerWorkers = 4
# Maximum memory (RAM) size of JetStream streams in bytes
JetStreamMaxMemory = 1073741824
# Maximum memory (disk) usage of JetStream streams in bytes
JetStreamMaxStore = 0
# Path to store JetStream data
JetStreamStoreDirectory = './data/jetstream'

# general Config regarding the REST API offered by the platform
[RestApiConfig]
LogBodyOnPanic = false
LogHttpHeaderOnPanic = false

# Integration related Configuration
[Integration]
# Default timeout for MQTT integrations in milliseconds
MqttDefaultTimeoutMs = 10000
# Default timeout for HTTP integrations in milliseconds
HttpDefaultTimeoutMs = 10000
# Rate limit for updating logging in case if success Seconds, 0 for no limit
LoggingSuccessRateLimitSeconds = 10
# Rate limit for updating logging in case of error/failur in Seconds, 0 for no limit
LoggingErrorRateLimitSeconds = 10
```