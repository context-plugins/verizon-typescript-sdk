
# Account Level Object

## Structure

`AccountLevelObject`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `filterCriteria` | [`AccountLevelFilter \| undefined`](../../doc/models/account-level-filter.md) | Optional | - |
| `condition` | [`AccountLevelObjectCondition \| undefined`](../../doc/models/containers/account-level-object-condition.md) | Optional | This is a container for any-of cases. |
| `action` | [`AccountLevelActionEnum \| undefined`](../../doc/models/account-level-action-enum.md) | Optional | The action taken when trigger conditions are met |

## Example

```ts
import {
  AccountLevelActionEnum,
  AccountLevelObject,
  ConditionTypeEnum,
} from 'verizonlib';

const accountLevelObject: AccountLevelObject = {
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
  condition: ConditionTypeEnum.UsageAllowance,
  action: AccountLevelActionEnum.Notify,
};
```

