
# Device Level Create Trigger Request

## Structure

`DeviceLevelCreateTriggerRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `triggerName` | `string \| undefined` | Optional | The user defined name of the trigger |
| `ecpdId` | `string \| undefined` | Optional | The Enterprise Customer Profile Database ID |
| `triggerCategory` | [`TriggerCategoryEnum \| undefined`](../../doc/models/trigger-category-enum.md) | Optional | The type of trigger being created or modified |
| `dataTrigger` | [`DataTrigger2 \| undefined`](../../doc/models/data-trigger-2.md) | Optional | - |
| `notification` | [`Notificationarray \| undefined`](../../doc/models/notificationarray.md) | Optional | - |
| `active` | [`ActiveEnum \| undefined`](../../doc/models/active-enum.md) | Optional | A flag to indicate of the trigger is active, true, or not, false |

## Example

```ts
import {
  ActiveEnum,
  ComparitorEnum,
  ConditionTypeEnum,
  DeviceLevelCreateTriggerRequest,
  ThresholdUnitEnum,
  TriggerCategoryEnum,
} from 'verizonlib';

const deviceLevelCreateTriggerRequest: DeviceLevelCreateTriggerRequest = {
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
  notification: {
    notificationType: 'notificationType8',
    callback: false,
    emailNotification: false,
    notificationGroupName: 'notificationGroupName6',
    notificationFrequencyFactor: 22,
  },
  active: ActiveEnum.True,
};
```

