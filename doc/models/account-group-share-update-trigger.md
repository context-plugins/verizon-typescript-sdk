
# Account Group Share Update Trigger

## Structure

`AccountGroupShareUpdateTrigger`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `triggerId` | `string \| undefined` | Optional | The system assigned UUID of the trigger |
| `triggerName` | `string \| undefined` | Optional | The user defined name of the trigger |
| `accountName` | `string \| undefined` | Optional | The numeric name of the account and must include leading zeroes |
| `triggerCategory` | [`TriggerCategoryEnum \| undefined`](../../doc/models/trigger-category-enum.md) | Optional | The type of trigger being created or modified |
| `dataTrigger` | [`AccountGroupShareObject \| undefined`](../../doc/models/account-group-share-object.md) | Optional | - |
| `notification` | [`Notificationarray \| undefined`](../../doc/models/notificationarray.md) | Optional | - |

## Example

```ts
import {
  AccountGroupShareUpdateTrigger,
  ConditionActionEnum,
  TriggerCategoryEnum,
} from 'verizonlib';

const accountGroupShareUpdateTrigger: AccountGroupShareUpdateTrigger = {
  triggerId: 'be1b5958-ffff-eeee-gggg-b1b7618c0035',
  triggerName: 'name of the trigger',
  accountName: '0000123456-00001',
  triggerCategory: TriggerCategoryEnum.AccountUsage,
  dataTrigger: {
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
};
```

