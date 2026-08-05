
# Account Group Share Individual 1

## Structure

`AccountGroupShareIndividual1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountGroupShareIndividual` | [`AccountGroupShareFilterCriteria \| undefined`](../../doc/models/account-group-share-filter-criteria.md) | Optional | - |

## Example

```ts
import {
  AccountGroupShareIndividual1,
  ConditionActionEnum,
} from 'verizonlib';

const accountGroupShareIndividual1: AccountGroupShareIndividual1 = {
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
};
```

