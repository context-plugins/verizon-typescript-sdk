
# Account Group Share Create Trigger

## Structure

`AccountGroupShareCreateTrigger`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `triggerName` | `string \| undefined` | Optional | The user defined name of the trigger |
| `accountName` | `string \| undefined` | Optional | The numeric name of the account and must include leading zeroes |
| `triggerCategory` | [`TriggerCategoryEnum \| undefined`](../../doc/models/trigger-category-enum.md) | Optional | The type of trigger being created or modified |
| `pricePlanTrigger` | [`AccountGroupShareObject \| undefined`](../../doc/models/account-group-share-object.md) | Optional | - |
| `notification` | [`Notificationarray \| undefined`](../../doc/models/notificationarray.md) | Optional | - |

## Example

```ts
import {
  AccountGroupShareCreateTrigger,
  ConditionActionEnum,
  TriggerCategoryEnum,
} from 'verizonlib';

const accountGroupShareCreateTrigger: AccountGroupShareCreateTrigger = {
  triggerName: 'name of the trigger',
  accountName: '0000123456-00001',
  triggerCategory: TriggerCategoryEnum.PricePlanDataUsage,
  pricePlanTrigger: {
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

