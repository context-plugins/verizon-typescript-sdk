
# Account Share Filter Criteria

## Structure

`AccountShareFilterCriteria`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `filterCriteria` | [`AccountShareFilterCriteria1 \| undefined`](../../doc/models/account-share-filter-criteria-1.md) | Optional | - |

## Example

```ts
import { AccountShareFilterCriteria } from 'verizonlib';

const accountShareFilterCriteria: AccountShareFilterCriteria = {
  filterCriteria: {
    carrierServicePlanCode: 'carrierServicePlanCode4',
    accountNameList: [
      'accountNameList7',
      'accountNameList8'
    ],
  },
};
```

