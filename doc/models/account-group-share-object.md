
# Account Group Share Object

## Structure

`AccountGroupShareObject`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountGroupShare` | [`AccountGroupShareIndividual1 \| undefined`](../../doc/models/account-group-share-individual-1.md) | Optional | - |

## Example

```ts
import { AccountGroupShareObject, ConditionActionEnum } from 'verizonlib';

const accountGroupShareObject: AccountGroupShareObject = {
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
};
```

