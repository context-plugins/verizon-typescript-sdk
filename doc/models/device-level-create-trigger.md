
# Device Level Create Trigger

## Structure

`DeviceLevelCreateTrigger`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
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
  DeviceLevelCreateTrigger,
  ThresholdUnitEnum,
  TriggerCategoryEnum,
} from 'verizonlib';

const deviceLevelCreateTrigger: DeviceLevelCreateTrigger = {
  triggerName: 'name of the trigger',
  ecpdId: 'Verizon profile ID',
  triggerCategory: TriggerCategoryEnum.PricePlanDataUsage,
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
  notification: {
    notificationType: 'notificationType8',
    callback: false,
    emailNotification: false,
    notificationGroupName: 'notificationGroupName6',
    notificationFrequencyFactor: 22,
  },
};
```

