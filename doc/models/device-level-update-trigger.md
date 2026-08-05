
# Device Level Update Trigger

## Structure

`DeviceLevelUpdateTrigger`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `triggerId` | `string \| undefined` | Optional | The system assigned UUID of the trigger |
| `triggerName` | `string \| undefined` | Optional | The user defined name of the trigger |
| `ecpdId` | `string \| undefined` | Optional | The Enterprise Customer Profile Database ID |
| `triggerCategory` | [`TriggerCategoryEnum \| undefined`](../../doc/models/trigger-category-enum.md) | Optional | The type of trigger being created or modified |
| `dataTrigger` | [`DataTrigger2 \| undefined`](../../doc/models/data-trigger-2.md) | Optional | - |
| `notification` | [`Notificationarray \| undefined`](../../doc/models/notificationarray.md) | Optional | - |

## Example

```ts
import {
  ComparitorEnum,
  ConditionTypeEnum,
  DeviceLevelUpdateTrigger,
  ThresholdUnitEnum,
  TriggerCategoryEnum,
} from 'verizonlib';

const deviceLevelUpdateTrigger: DeviceLevelUpdateTrigger = {
  triggerId: 'be1b5958-ffff-eeee-gggg-b1b7618c0035',
  triggerName: 'name of the trigger',
  ecpdId: 'Verizon profile ID',
  triggerCategory: TriggerCategoryEnum.AccountUsage,
  dataTrigger: {
    deviceGroup: {
      filterCriteria: {
        deviceGroupName: 'deviceGroupName4',
        individualOrCombined: 'IndividualOrCombined4',
        accountName: 'accountName0',
      },
    },
    conditionType: ConditionTypeEnum.Aging,
    comparitor: ComparitorEnum.Eq,
    threshold: 222,
    thresholdUnit: ThresholdUnitEnum.MB,
  },
};
```

