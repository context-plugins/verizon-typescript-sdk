
# Data Trigger

## Structure

`DataTrigger`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountLevel` | [`AccountLevelObject \| undefined`](../../doc/models/account-level-object.md) | Optional | - |

## Example

```ts
import {
  AccountLevelActionEnum,
  ConditionTypeEnum,
  DataTrigger,
} from 'verizonlib';

const dataTrigger: DataTrigger = {
  accountLevel: {
    filterCriteria: {
      separateOrCombined: 'separateOrCombined4',
      accountNames: {
        accountNameList: [
          'accountNameList7',
          'accountNameList8',
          'accountNameList9'
        ],
      },
    },
    condition: ConditionTypeEnum.Individual,
    action: AccountLevelActionEnum.Suspend,
  },
};
```

