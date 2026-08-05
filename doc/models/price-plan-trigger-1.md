
# Price Plan Trigger 1

## Structure

`PricePlanTrigger1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountGroupShare` | [`AccountGroupShareIndividual1 \| undefined`](../../doc/models/account-group-share-individual-1.md) | Optional | - |
| `accountShare` | [`AccountShareFilterCriteria \| undefined`](../../doc/models/account-share-filter-criteria.md) | Optional | - |
| `condition` | [`PricePlanTrigger1Condition \| undefined`](../../doc/models/containers/price-plan-trigger-1-condition.md) | Optional | This is a container for any-of cases. |
| `changePlan` | `boolean \| undefined` | Optional | a flag to set if the trigger changes service plans, true, or not, false |
| `changePlanDetails` | [`ChangePlanDetails \| undefined`](../../doc/models/change-plan-details.md) | Optional | The service plan code to switch to |
| `payAsYouGo` | [`PayAsYouGoFilterCriteria \| undefined`](../../doc/models/pay-as-you-go-filter-criteria.md) | Optional | - |
| `action` | [`Actionobject \| undefined`](../../doc/models/actionobject.md) | Optional | - |
| `standAlone` | [`FiltercriteriaObjectCall \| undefined`](../../doc/models/filtercriteria-object-call.md) | Optional | - |

## Example

```ts
import {
  ConditionActionEnum,
  ConditionTypeEnum,
  PricePlanTrigger1,
} from 'verizonlib';

const pricePlanTrigger1: PricePlanTrigger1 = {
  accountGroupShare: {
    accountGroupShareIndividual: {
      filterCriteria: {
        ratePlanGroupId: 202,
      },
      condition: {
        action: ConditionActionEnum.Notify,
      },
      action: {
        notify: {
          alertType: 'alertType8',
          threshold: [
            {
              carrierCode: 'carrierCode4',
              percentage: {
                percentage50: false,
                percentage75: false,
                percentage90: false,
                percentage100: false,
              },
            },
            {
              carrierCode: 'carrierCode4',
              percentage: {
                percentage50: false,
                percentage75: false,
                percentage90: false,
                percentage100: false,
              },
            },
            {
              carrierCode: 'carrierCode4',
              percentage: {
                percentage50: false,
                percentage75: false,
                percentage90: false,
                percentage100: false,
              },
            }
          ],
        },
      },
    },
  },
  accountShare: {
    filterCriteria: {
      carrierServicePlanCode: 'carrierServicePlanCode4',
      accountNameList: [
        'accountNameList7',
        'accountNameList8'
      ],
    },
  },
  condition: ConditionTypeEnum.Aging,
  changePlan: true,
  changePlanDetails: {
    toCarrierServicePlanCode: 'toCarrierServicePlanCode2',
  },
};
```

