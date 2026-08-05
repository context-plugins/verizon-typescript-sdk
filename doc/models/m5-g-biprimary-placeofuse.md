
# M5 G Biprimary Placeofuse

## Structure

`M5gBiprimaryPlaceofuse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `address` | [`M5gBiAddress \| undefined`](../../doc/models/m5-g-bi-address.md) | Optional | - |
| `customerName` | [`M5gBiCustomerName \| undefined`](../../doc/models/m5-g-bi-customer-name.md) | Optional | - |

## Example

```ts
import { M5gBiprimaryPlaceofuse } from 'verizonlib';

const m5gBiprimaryPlaceofuse: M5gBiprimaryPlaceofuse = {
  address: {
    addressLine1: 'addressLine18',
    city: 'city6',
    state: 'state2',
    zip: 'zip0',
    zip4: 'zip+48',
  },
  customerName: {
    firstName: 'firstName4',
    lastName: 'lastName4',
    middleName: 'middleName8',
    title: 'title4',
    suffex: 'suffex4',
  },
};
```

