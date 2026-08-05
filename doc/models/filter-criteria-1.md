
# Filter Criteria 1

## Structure

`FilterCriteria1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `carrierServicePlanCode` | `string \| undefined` | Optional | - |
| `accountNameList` | `string[] \| undefined` | Optional | An array of account names |

## Example

```ts
import { FilterCriteria1 } from 'verizonlib';

const filterCriteria1: FilterCriteria1 = {
  carrierServicePlanCode: 'Service plan code value',
  accountNameList: [
    'accountNameList7',
    'accountNameList8'
  ],
};
```

