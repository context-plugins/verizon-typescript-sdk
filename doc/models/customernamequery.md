
# Customernamequery

## Structure

`Customernamequery`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `customerName` | [`CustomerName[] \| undefined`](../../doc/models/customer-name.md) | Optional | **Constraints**: *Maximum Items*: `5` |

## Example

```ts
import { Customernamequery } from 'verizonlib';

const customernamequery: Customernamequery = {
  customerName: [
    {
      firstName: 'firstName4',
      lastName: 'lastName4',
      title: 'title4',
      middleName: 'middleName8',
      suffix: 'suffix0',
    },
    {
      firstName: 'firstName4',
      lastName: 'lastName4',
      title: 'title4',
      middleName: 'middleName8',
      suffix: 'suffix0',
    }
  ],
};
```

