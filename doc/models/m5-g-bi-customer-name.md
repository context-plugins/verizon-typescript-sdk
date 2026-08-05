
# M5 G Bi Customer Name

## Structure

`M5gBiCustomerName`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `firstName` | `string \| undefined` | Optional | - |
| `lastName` | `string \| undefined` | Optional | - |
| `middleName` | `string \| undefined` | Optional | - |
| `title` | `string \| undefined` | Optional | - |
| `suffex` | `string \| undefined` | Optional | - |

## Example

```ts
import { M5gBiCustomerName } from 'verizonlib';

const m5gBiCustomerName: M5gBiCustomerName = {
  firstName: 'First name',
  lastName: 'Surname or Last Name',
  middleName: 'middle name or initial',
  title: 'Mr. or Ms.',
  suffex: 'Dr or Esq',
};
```

