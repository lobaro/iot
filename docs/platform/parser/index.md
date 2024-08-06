---
draft: false
---

# Parser

A Parser is written in JavaScript. It takes raw input from the device and converts the data into a unified format used
by the Platform.
In addition, the parser can access an API to set device level properties and additional meta information outside the
actual data record.

Parsers are attached to every device type and can be overwritten by a single device.

**Example:**

```javascript
function Parse(input) {
  var dataStr = atob(input.data);
  var data = bytes(dataStr);
 
  // Decode an incoming message to an object of fields.
  var decoded = {input: input};
 
  return decoded;
}
```

## Parser JavaScript API

### Helper functions

Functions to cast Types, convert between Hex/Base64/Bytes etc.

```javascript
// Bytes can convert binary data to byte array
// atob converts Base64 string to byte string
var bytes = bytes(atob("aGFsbG8gYmFzZTY0"));
 
// Convert Base64 to byte array, shortcut for bytes(atob(...))
var bytes = parseBase64("aGFsbG8gYmFzZTY0");
 
// Convert bytes to string
var str = string(bytes);
 
// byte parsing helper
uint16BE(bytes, idx);
uint16LE(bytes, idx);
uint32BE(bytes, idx);
uint32LE(bytes, idx);
float32LE(bytes, idx);
float32BE(bytes, idx);
```

### Parser functions

The global namespace `Parser` contains general functions for using extended parser features.

```javascript
// Parse wMbus message
Parser.parseWmbus(bytes);
 
// Takes bytes of a partial message and a cacheKey
// In context of the receiving device all data with the same cacheKey
// is concatinated and the restult returned
// To start a new message, pass a new cacheKey
var joined = Parser.joinPartial(bytes, cacheKey);
 
// Clears all data with the given cacheKey
// returns the joined parts that were added by joinPartial before
var joined = Parser.clearPartial(cacheKey);
 
// Equivalent to clearPartial followed by joinPartial
var joined = Parser.newPartial(cacheKey);
```

### Device functions

Functions Related to the Device the Parser is executed for. 

Access device related information

```javascript
// Read only properties:
Device.name // String
Device.address // String
Device.tags // Array of Strings
Device.serial // String

// Update the physical location of the sensor
Device.setLocation(lon, lat)

// Set an device config value, displayed on the "Config" tab of the device
Device.setConfig("key", "value");

// Set an arbitrary device property, displayed on the "Overview" tab of the device
Device.setProperty("key", "value");

// Get Configuration Value by Name  
// Opearates on a snapshot of values before the parser execution.
//
// value is null if if the value is not set.
// value type is string, number or bool.
// Byte arrays are encoded as Base64 strings.
var value = Device.getConfig("key");

```

### Record functions


```javascript

// Get the time when the data was received by the server in ms, compatible with new Date(t).
var t = Record.getReceivedAt();




```

Set the measured time based on a field on the result json.

```javascript
// setTimeField sets the field name from which the time is extracted, and the time format it is written in.
// The parser will extract it from and set it for each returned (batch) record in the DB.
// fieldName is the field of the record that contains the time
// timeFmt is optional and defaults to "UNIXMS"
Record.setTimeField(fieldName, timeFmt);
```

**fieldName values**

The field name can be a top level field or a path to the field in the record, e.g. `path.to.time`.

Syntax of the fieldName is handled by gjson, see: https://github.com/tidwall/gjson

**timeFmt values**
* `UNIXMS` - Unix timestamp in milliseconds
* `UNIXS` - Unix timestamp in seconds
* `RFC3339` - RFC3339 (ISO 8601) date string


:::warning[Deprecated]
setTime is deprecated. Use setTimeField instead.
setTime can only set a single time for all results. 
:::

```javascript
// Set the Sensor time (Measured At) of the current data record. Used for display, filter, sorting.
// The Timestamp must be in JS style and thus in milli seconds
// Deprecated: Use setTimefield instead
Record.setTime(new Date(timestamp_ms));
```
