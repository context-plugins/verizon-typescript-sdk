
# Data Trigger 1

## Structure

`DataTrigger1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `filterCriteria` | [`AccountLevelFilter \| undefined`](../../doc/models/account-level-filter.md) | Optional | - |
| `condition` | [`DataTrigger1Condition \| undefined`](../../doc/models/containers/data-trigger-1-condition.md) | Optional | This is a container for any-of cases. |
| `action` | [`AccountLevelActionEnum \| undefined`](../../doc/models/account-level-action-enum.md) | Optional | The action taken when trigger conditions are met |
| `conditionType` | [`ConditionTypeEnum \| undefined`](../../doc/models/condition-type-enum.md) | Optional | The condition type being monitored |
| `comparitor` | [`ComparitorEnum \| undefined`](../../doc/models/comparitor-enum.md) | Optional | The boolean of the comparison. `gt` is Greater Than, `lt` is Less Than and `eq` is Equal To |
| `threshold` | `number \| undefined` | Optional | The threshold value the trigger monitors for |
| `thresholdUnit` | [`ThresholdUnitEnum \| undefined`](../../doc/models/threshold-unit-enum.md) | Optional | The units of the threshold. This can be KB, Kilobits, MB, Megabits, or GB, Gigabits |
| `cycleType` | [`RulesCycleTypeEnum \| undefined`](../../doc/models/rules-cycle-type-enum.md) | Optional | The interval to monitor for the threshold. This can be Daily, Weekly or Monthly |
| `allowanceThreshold` | [`AllowanceThreshold \| undefined`](../../doc/models/allowance-threshold.md) | Optional | - |

## Example

```ts
import {
  AccountLevelActionEnum,
  ComparitorEnum,
  ConditionTypeEnum,
  DataTrigger1,
  RulesCycleTypeEnum,
  ThresholdUnitEnum,
} from 'verizonlib';

const dataTrigger1: DataTrigger1 = {
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
  condition: ConditionTypeEnum.Aging,
  action: AccountLevelActionEnum.Notify,
  conditionType: ConditionTypeEnum.Aging,
  comparitor: ComparitorEnum.Gt,
  threshold: 100,
  thresholdUnit: ThresholdUnitEnum.KB,
  cycleType: RulesCycleTypeEnum.Daily,
};
```

