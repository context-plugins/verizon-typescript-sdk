
# Pay as You Go Update Trigger Request

## Structure

`PayAsYouGoUpdateTriggerRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `triggerId` | `string \| undefined` | Optional | The system assigned UUID of the trigger |
| `triggerName` | `string \| undefined` | Optional | The user defined name of the trigger |
| `ecpdId` | `string \| undefined` | Optional | The Enterprise Customer Profile Database ID |
| `triggerCategory` | [`TriggerCategoryEnum \| undefined`](../../doc/models/trigger-category-enum.md) | Optional | The type of trigger being created or modified |
| `pricePlanTrigger` | [`PayAsYouGoPricePlanTrigger \| undefined`](../../doc/models/pay-as-you-go-price-plan-trigger.md) | Optional | - |
| `notification` | [`Notificationarray \| undefined`](../../doc/models/notificationarray.md) | Optional | - |
| `active` | [`ActiveEnum \| undefined`](../../doc/models/active-enum.md) | Optional | A flag to indicate of the trigger is active, true, or not, false |

## Example

```ts
import {
  ActiveEnum,
  ConditionTypeEnum,
  PayAsYouGoUpdateTriggerRequest,
  ThresholdUnitEnum,
  TriggerCategoryEnum,
} from 'verizonlib';

const payAsYouGoUpdateTriggerRequest: PayAsYouGoUpdateTriggerRequest = {
  triggerId: 'be1b5958-ffff-eeee-gggg-b1b7618c0035',
  triggerName: 'name of the trigger',
  ecpdId: 'Verizon profile ID',
  triggerCategory: TriggerCategoryEnum.PricePlanDataUsage,
  pricePlanTrigger: {
    payAsYouGo: {
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
  active: ActiveEnum.True,
};
```

