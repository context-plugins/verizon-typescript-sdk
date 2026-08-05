
# Account Group Share Filter Criteria

## Structure

`AccountGroupShareFilterCriteria`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `filterCriteria` | [`AccountGroupShareFilter \| undefined`](../../doc/models/account-group-share-filter.md) | Optional | - |
| `condition` | [`AccountGroupShareCondition \| undefined`](../../doc/models/account-group-share-condition.md) | Optional | - |
| `action` | [`AccountGroupShareAction \| undefined`](../../doc/models/account-group-share-action.md) | Optional | - |

## Example

```ts
import {
  AccountGroupShareFilterCriteria,
  ConditionActionEnum,
} from 'verizonlib';

const accountGroupShareFilterCriteria: AccountGroupShareFilterCriteria = {
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
};
```

