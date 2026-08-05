
# Geolocation

Geolocation of the device at the time of the connection request in GPS coordinates.

## Structure

`Geolocation`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `latitude` | `number` | Required | The GPS Latitude value<br><br>**Constraints**: `>= -90`, `<= 90` |
| `longitude` | `number` | Required | The GPS Longitude value<br><br>**Constraints**: `>= -180`, `<= 180` |

## Example

```ts
import { Geolocation } from 'verizonlib';

const geolocation: Geolocation = {
  latitude: 42.36,
  longitude: -71.06,
};
```

