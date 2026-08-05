
# Addressquery

## Structure

`Addressquery`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `address` | [`Address[] \| undefined`](../../doc/models/address.md) | Optional | **Constraints**: *Maximum Items*: `5` |

## Example

```ts
import { Addressquery } from 'verizonlib';

const addressquery: Addressquery = {
  address: [
    {
      addressLine1: 'addressLine18',
      city: 'city6',
      state: 'state2',
      zip: 'zip0',
      country: 'country0',
      addressLine2: 'addressLine26',
      zip4: 'zip40',
      phone: 'phone4',
      phoneType: 'phoneType0',
      emailAddress: 'emailAddress6',
    },
    {
      addressLine1: 'addressLine18',
      city: 'city6',
      state: 'state2',
      zip: 'zip0',
      country: 'country0',
      addressLine2: 'addressLine26',
      zip4: 'zip40',
      phone: 'phone4',
      phoneType: 'phoneType0',
      emailAddress: 'emailAddress6',
    },
    {
      addressLine1: 'addressLine18',
      city: 'city6',
      state: 'state2',
      zip: 'zip0',
      country: 'country0',
      addressLine2: 'addressLine26',
      zip4: 'zip40',
      phone: 'phone4',
      phoneType: 'phoneType0',
      emailAddress: 'emailAddress6',
    }
  ],
};
```

