
# Customer Name

The customer name to be used for line usage taxation.

## Structure

`CustomerName`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `title` | `string \| undefined` | Optional | An optional title for the customer, such as “Mr.” or “Dr.” |
| `firstName` | `string` | Required | The customer's first name. |
| `middleName` | `string \| undefined` | Optional | The customer's middle name. |
| `lastName` | `string` | Required | The customer's last name. |
| `suffix` | `string \| undefined` | Optional | An optional suffix for the customer name, such as “Jr.” or “III.” |

## Example

```ts
import { CustomerName } from 'verizonlib';

const customerName: CustomerName = {
  firstName: 'Zaffod',
  lastName: 'Beeblebrox',
  title: 'President',
  middleName: 'middleName8',
  suffix: 'suffix0',
};
```

