
# Device Level Update Trigger Request

## Structure

`DeviceLevelUpdateTriggerRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `triggerId` | `string \| undefined` | Optional | The system assigned UUID of the trigger |
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
  DeviceLevelUpdateTriggerRequest,
  ThresholdUnitEnum,
  TriggerCategoryEnum,
} from 'verizonlib';

const deviceLevelUpdateTriggerRequest: DeviceLevelUpdateTriggerRequest = {
  triggerId: 'be1b5958-ffff-eeee-gggg-b1b7618c0035',
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
  active: ActiveEnum.True,
};
```

