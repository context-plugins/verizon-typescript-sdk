
# Account Share Filter Criteria 1

## Structure

`AccountShareFilterCriteria1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `carrierServicePlanCode` | `string \| undefined` | Optional | - |
| `accountNameList` | `string[] \| undefined` | Optional | An array of account names |

## Example

```ts
import { AccountShareFilterCriteria1 } from 'verizonlib';

const accountShareFilterCriteria1: AccountShareFilterCriteria1 = {
  carrierServicePlanCode: 'Service plan code value',
  accountNameList: [
    'accountNameList3'
  ],
};
```

