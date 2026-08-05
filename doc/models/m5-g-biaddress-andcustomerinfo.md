
# M5 G Biaddress Andcustomerinfo

## Structure

`M5gBiaddressAndcustomerinfo`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `primaryPlaceofuse` | [`M5gBiprimaryPlaceofuse \| undefined`](../../doc/models/m5-g-biprimary-placeofuse.md) | Optional | - |

## Example

```ts
import { M5gBiaddressAndcustomerinfo } from 'verizonlib';

const m5gBiaddressAndcustomerinfo: M5gBiaddressAndcustomerinfo = {
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
};
```

