
# Locations

Location details.

## Structure

`Locations`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `addressList` | [`AddressItem[] \| undefined`](../../doc/models/address-item.md) | Optional | **Constraints**: *Maximum Items*: `100` |

## Example

```ts
import { Locations } from 'verizonlib';

const locations: Locations = {
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

