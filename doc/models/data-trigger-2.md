
# Data Trigger 2

## Structure

`DataTrigger2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `deviceGroup` | [`DeviceGroupFilterCriteria \| undefined`](../../doc/models/device-group-filter-criteria.md) | Optional | - |
| `conditionType` | [`ConditionTypeEnum \| undefined`](../../doc/models/condition-type-enum.md) | Optional | The condition type being monitored |
| `comparitor` | [`ComparitorEnum \| undefined`](../../doc/models/comparitor-enum.md) | Optional | The boolean of the comparison. `gt` is Greater Than, `lt` is Less Than and `eq` is Equal To |
| `threshold` | `number \| undefined` | Optional | The threshold value the trigger monitors for |
| `thresholdUnit` | [`ThresholdUnitEnum \| undefined`](../../doc/models/threshold-unit-enum.md) | Optional | The units of the threshold. This can be KB, Kilobits, MB, Megabits, or GB, Gigabits |
| `cycleType` | [`RulesCycleTypeEnum \| undefined`](../../doc/models/rules-cycle-type-enum.md) | Optional | The interval to monitor for the threshold. This can be Daily, Weekly or Monthly |
| `allowanceThreshold` | [`AllowanceThreshold \| undefined`](../../doc/models/allowance-threshold.md) | Optional | - |
| `action` | [`Actionobject \| undefined`](../../doc/models/actionobject.md) | Optional | - |

## Example

```ts
import {
  ComparitorEnum,
  ConditionTypeEnum,
  DataTrigger2,
  RulesCycleTypeEnum,
  ThresholdUnitEnum,
} from 'verizonlib';

const dataTrigger2: DataTrigger2 = {
  deviceGroup: {
    filterCriteria: {
      deviceGroupName: 'deviceGroupName4',
      individualOrCombined: 'IndividualOrCombined4',
      accountName: 'accountName0',
    },
  },
  conditionType: ConditionTypeEnum.Aging,
  comparitor: ComparitorEnum.Gt,
  threshold: 100,
  thresholdUnit: ThresholdUnitEnum.KB,
  cycleType: RulesCycleTypeEnum.Daily,
};
```

