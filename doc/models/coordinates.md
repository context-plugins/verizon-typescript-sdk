
# Coordinates

Coordinates information.

## Structure

`Coordinates`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `latitude` | `string \| undefined` | Optional | Latitude value of location.<br><br>**Constraints**: *Minimum Length*: `3`, *Maximum Length*: `12`, *Pattern*: `^[-+]?([0-9.]{3,12})$` |
| `longitude` | `string \| undefined` | Optional | Longitude value of location.<br><br>**Constraints**: *Minimum Length*: `3`, *Maximum Length*: `12`, *Pattern*: `^[-+]?([0-9.]{3,12})$` |

## Example

```ts
import { Coordinates } from 'verizonlib';

const coordinates: Coordinates = {
  latitude: '-33.84819',
  longitude: '151.22049',
};
```

