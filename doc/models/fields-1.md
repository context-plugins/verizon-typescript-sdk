
# Fields 1

## Structure

`Fields1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `item` | [`SearchDeviceByPropertyFields \| undefined`](../../doc/models/search-device-by-property-fields.md) | Optional | List of device sensors and their most recently reported values. |

## Example

```ts
import { Fields1 } from 'verizonlib';

const fields1: Fields1 = {
  item: {
    acceleration: {
      x: 'x6',
      y: 'y4',
      z: 'z6',
    },
    battery: 'battery0',
    humidity: 'humidity4',
    light: 'light6',
    pressure: 'pressure2',
  },
};
```

