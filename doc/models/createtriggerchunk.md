
# Createtriggerchunk

## Structure

`Createtriggerchunk`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `triggerName` | `string \| undefined` | Optional | The user defined name of the trigger |
| `ecpdId` | `string \| undefined` | Optional | The Enterprise Customer Profile Database ID |
| `triggerCategory` | [`TriggerCategoryEnum \| undefined`](../../doc/models/trigger-category-enum.md) | Optional | The type of trigger being created or modified |
| `pricePlanTrigger` | [`PricePlanTrigger \| undefined`](../../doc/models/price-plan-trigger.md) | Optional | - |
| `notification` | [`Notificationarray \| undefined`](../../doc/models/notificationarray.md) | Optional | - |
| `active` | [`ActiveEnum \| undefined`](../../doc/models/active-enum.md) | Optional | A flag to indicate of the trigger is active, true, or not, false |

## Example

```ts
import {
  ActiveEnum,
  ConditionTypeEnum,
  Createtriggerchunk,
  ThresholdUnitEnum,
  TriggerCategoryEnum,
} from 'verizonlib';

const createtriggerchunk: Createtriggerchunk = {
  triggerName: 'name of the trigger',
  ecpdId: 'Verizon profile ID',
  triggerCategory: TriggerCategoryEnum.PricePlanDataUsage,
  pricePlanTrigger: {
    standAlone: {
      filterCriteria: {
        carrierServicePlanCode: 'carrierServicePlanCode4',
        accountNameList: [
          'accountNameList7',
          'accountNameList8'
        ],
      },
    },
    condition: ConditionTypeEnum.Aging,
    action: {
      suspend: false,
      suspendDetails: {
        suspendFromAccounts: [
          'suspendFromAccounts7'
        ],
        suspendDuration: 152,
        suspendOption: 'suspendOption2',
        threshold: 166,
        thresholdUnit: ThresholdUnitEnum.GB,
      },
      changePlan: false,
      changePlanDetails: {
        toCarrierServicePlanCode: 'toCarrierServicePlanCode2',
      },
    },
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

