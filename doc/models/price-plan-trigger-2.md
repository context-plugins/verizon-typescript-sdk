
# Price Plan Trigger 2

## Structure

`PricePlanTrigger2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountShare` | [`AccountShareFilterCriteria \| undefined`](../../doc/models/account-share-filter-criteria.md) | Optional | - |
| `condition` | [`PricePlanTrigger2Condition \| undefined`](../../doc/models/containers/price-plan-trigger-2-condition.md) | Optional | This is a container for any-of cases. |
| `changePlan` | `boolean \| undefined` | Optional | a flag to set if the trigger changes service plans, true, or not, false |
| `changePlanDetails` | [`ChangePlanDetails \| undefined`](../../doc/models/change-plan-details.md) | Optional | The service plan code to switch to |
| `payAsYouGo` | [`PayAsYouGoFilterCriteria \| undefined`](../../doc/models/pay-as-you-go-filter-criteria.md) | Optional | - |
| `action` | [`Actionobject \| undefined`](../../doc/models/actionobject.md) | Optional | - |
| `standAlone` | [`FiltercriteriaObjectCall \| undefined`](../../doc/models/filtercriteria-object-call.md) | Optional | - |

## Example

```ts
import { ConditionTypeEnum, PricePlanTrigger2 } from 'verizonlib';

const pricePlanTrigger2: PricePlanTrigger2 = {
  accountShare: {
    filterCriteria: {
      carrierServicePlanCode: 'carrierServicePlanCode4',
      accountNameList: [
        'accountNameList7',
        'accountNameList8'
      ],
    },
  },
  condition: ConditionTypeEnum.UsageAllowance,
  changePlan: true,
  changePlanDetails: {
    toCarrierServicePlanCode: 'toCarrierServicePlanCode2',
  },
  payAsYouGo: {
    filterCriteria: {
      carrierServicePlanCode: 'carrierServicePlanCode4',
      accountNameList: [
        'accountNameList7',
        'accountNameList8'
      ],
    },
  },
};
```

