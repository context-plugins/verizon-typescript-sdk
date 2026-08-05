
# Locations 1

## Structure

`Locations1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `coordinatesList` | [`Coordinates[] \| undefined`](../../doc/models/coordinates.md) | Optional | - |
| `addressList` | [`AddressItem[] \| undefined`](../../doc/models/address-item.md) | Optional | **Constraints**: *Maximum Items*: `100` |

## Example

```ts
import { Locations1 } from 'verizonlib';

const locations1: Locations1 = {
  coordinatesList: [
    {
      latitude: 'latitude6',
      longitude: 'longitude4',
    },
    {
      latitude: 'latitude6',
      longitude: 'longitude4',
    },
    {
      latitude: 'latitude6',
      longitude: 'longitude4',
    }
  ],
  addressList: [
    {
      addressLine1: 'addressLine10',
      addressLine2: 'addressLine28',
      city: 'city8',
      state: 'state4',
      country: 'country2',
    }
  ],
};
```

