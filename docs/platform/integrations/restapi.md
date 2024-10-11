---
draft: true
---

# REST API

![nav-REST-api.png](img/nav-REST-api.png)

## Navigation

- Go to: [Integrations -> REST](https://platform.lobaro.com/#/organisation/integrations/rest/)
- Swagger API documentation: [https://platform.lobaro.com/api](https://platform.lobaro.com/api)

### Access Tokens

All API calls must be authenticated with an access token. Access tokens can be managed on the **REST Integration** page.

Each token has a list of roles assigned to it.

#### Token Roles:

- **network-server**: Allows writing device data. Required for LoRaWAN Network Server integrations.

Include the token in the HTTP request header as follows:

- **Field**: `Authorization`
- **Value**: `Bearer eyJhbGciOiJIU...`

### Pagination

Pagination is required to query large datasets.

| Query Parameter | Default | Maximum Value | Description                              |
|-----------------|---------|---------------|------------------------------------------|
| `limit`         | 100     | 10,000        | Maximum number of records to retrieve.   |
| `offset`        | 0       | N/A           | Offset for the first record to retrieve. |

To fetch all data from an endpoint, adjust the offset:

- `?limit=100&offset=0`
- `?limit=100&offset=100`
- Continue increasing the offset by the limit until the number of returned rows is less than the limit.

### Filter Query Parameters

Filters can be added to requests in the form of `<type>:<field>=<op>:<value>`, e.g., `f:createdAt=gt:<timestamp>` to
filter by creation date.

- `<type>`: "f" for fields, or "fa" for arrays (e.g., to search in tags).
- `<field>`: The field being queried (e.g., "id", "createdAt", "updatedAt").
- `<op>`: Operator, see below for allowed operators.
- `<value>`: URL-encoded query value (e.g., `gt:2000-01-01T02:37:00%2B01:00`).

#### Allowed Operators:

| Operator      | Meaning                                                              | Valid for  |
|---------------|----------------------------------------------------------------------|------------|
| `eq`          | `=` (equals)                                                         | `f`        |
| `lte`         | `<=` (less than or equal)                                            | `f`        |
| `lt`          | `<` (less than)                                                      | `f`        |
| `gte`         | `>=` (greater than or equal)                                         | `f`        |
| `gt`          | `>` (greater than)                                                   | `f`        |
| `like`        | SQL `LIKE` operator                                                  | `f`        |
| `ilike`       | SQL `ILIKE` operator (case-insensitive LIKE)                         | `f`        |
| `isnull`      | SQL `is (not) null`. Values: "true" (is null), "false" (is not null) | `f` / `fa` |
| `contains`    | Array field contains all specified values                            | `fa`       |
| `containedby` | Array field is contained by the specified list of values             | `fa`       |
| `overlap`     | Array field and list of values overlap                               | `fa`       |

_Default operator: `eq` for fields and `contains` for arrays._

#### Examples:

1. Query JSON field `data.mbus.Id` for a number:
    - `&f:data.mbus.Id=eq:130567728`
2. Query JSON field `data.mbus.IdString` for a string:
    - `&f:data.mbus.IdString=eq:"10130567728"`

For date ranges, apply the same filter multiple times with different operators:

- `&f:receivedAt=gt:2000-01-01T02:37:00%2B01:00&f:createdAt=lt:2000-01-02T02:37:00%2B01:00`

### Usage Recommendations:

- Set the gzip encoding header to reduce network traffic.
- Use pagination with page sizes smaller than 10,000 entries.
- Prefer `receivedAt` over `createdAt` for time-based queries.

## Example Requests

### Get Data from a Single Device by Address or Tag

Find relevant device(s):

- **By Address**:  
  `https://platform.lobaro.com/api/devices?limit=100&offset=0&f:addr=eq:352656100677000`
- **By Tag**:  
  `https://platform.lobaro.com/api/devices?limit=100&offset=0&fa:tags=contains:my-tag,another-tag`

Use the `data.id` field from the first query to fetch device data. Replace `{deviceId}` with the actual device ID:
- `https://platform.lobaro.com/api/devices/{deviceId}/parsed-data?limit=100&offset=0&f:createdAt=gt:2000-01-01T02:37:00%2B01:00`


### Additional Endpoints:


|Description   |Method |Header| URL| URL Path Params| URL Query Params| Request Payload | Return|
|--------------|-------|------|----|----------------|-----------------|-----------------|-------|
| Downlink creation|POST|Authorization with org-admin or device-admin token (see Access Tokens)|/api/devices/{devId}/downlink|devId: Database ID of the device|type fw config lorawan raw see also: Downlinks|The Body contains the downlink content.|See also: Downlinks|200 ok Body: Empty error status code Body: information about the error|
|Device creation|POST|Authorization with org-admin or device-admin token (see Access Tokens)|/api/devices|-|-|deviceInput as JSON|{"name": "Gateway_1","addr": "FFFFFFFFFFFFFFFF","description": "3.OG Wohnung Müller","deviceTypeId": 2,"initialConfig": null,"location": null,"serial": "1337","tags": ["Müller", "MbusGw", "3.OG"],"certEnforcesDtls": false }|200 ok Body: Device as JSON error status code Body: information about the error|
|User creation|POST|Authorization with org-admin token (see Access Tokens)|/api/organisation/user|-|-|userInput as JSON :{"name": "Eample Test","email": "e.test@test.com","password": "s0meSecur3Pw","roles": ["org-admin","device-admin"]}|200 ok Body: User Json {"data":{"id":17,"createdAt":"2022-07-04T10:59:41.975812+02:00","updatedAt":"2022-07-04T10:59:41.975812+02:00","login":"e.test@test.com","name":"Eample Test","email":"e.test@test.com","organisationId":1,"roles":["device-admin"]}} error status code Body: information about the error|
|Uplink Replay|POST|Authorization with admin (platform not org) token. (see Access Tokens)|/api/admin/uplink-replay/{addr}| addr: Address of the device| datasource: string, received-at: RFC3339-string|empty|201 Create on success or http error code.|

