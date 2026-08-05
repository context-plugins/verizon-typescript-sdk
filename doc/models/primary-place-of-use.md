
# Primary Place of Use

## Structure

`PrimaryPlaceOfUse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `customerName` | [`CustomerName[] \| undefined`](../../doc/models/customer-name.md) | Optional | **Constraints**: *Maximum Items*: `5` |
| `address` | [`Address[] \| undefined`](../../doc/models/address.md) | Optional | **Constraints**: *Maximum Items*: `5` |

## Example

```ts
import { PrimaryPlaceOfUse } from 'verizonlib';

const primaryPlaceOfUse: PrimaryPlaceOfUse = {
  customerName: [
    {
      firstName: 'firstName4',
      lastName: 'lastName4',
      title: 'title4',
      middleName: 'middleName8',
      suffix: 'suffix0',
    }
  ],
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
    }
  ],
};
```

