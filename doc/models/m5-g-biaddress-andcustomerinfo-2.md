
# M5 G Biaddress Andcustomerinfo 2

## Structure

`M5gBiaddressAndcustomerinfo2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `primaryPlaceofuse` | [`M5gBiaddressAndcustomerinfo \| undefined`](../../doc/models/m5-g-biaddress-andcustomerinfo.md) | Optional | - |

## Example

```ts
import { M5gBiaddressAndcustomerinfo2 } from 'verizonlib';

const m5gBiaddressAndcustomerinfo2: M5gBiaddressAndcustomerinfo2 = {
  primaryPlaceofuse: {
    primaryPlaceofuse: {
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
    },
  },
};
```

