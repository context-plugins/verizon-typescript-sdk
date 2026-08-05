
# Accountid

## Structure

`Accountid`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountName` | `string \| undefined` | Optional | The numeric name of the account and must include leading zeroes |
| `mtasAccountNumber` | `string \| undefined` | Optional | - |

## Example

```ts
import { Accountid } from 'verizonlib';

const accountid: Accountid = {
  accountName: '0000123456-00001',
  mtasAccountNumber: '0000123456-00001',
};
```

