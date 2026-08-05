
# Promo Alert

## Structure

`PromoAlert`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `filterCriteria` | [`ReadySimServicePlan[] \| undefined`](../../doc/models/ready-sim-service-plan.md) | Optional | - |
| `condition` | [`Keyschunk2[] \| undefined`](../../doc/models/keyschunk-2.md) | Optional | - |
| `enablePromoExp` | `boolean \| undefined` | Optional | - |

## Example

```ts
import { PromoAlert } from 'verizonlib';

const promoAlert: PromoAlert = {
  filterCriteria: [
    {
      servicePlan: 'servicePlan4',
    },
    {
      servicePlan: 'servicePlan4',
    }
  ],
  condition: [
    {
      dataPercentage50: false,
      dataPercentage75: false,
      dataPercentage90: false,
      dataPercentage100: false,
      smsPercentage50: false,
    },
    {
      dataPercentage50: false,
      dataPercentage75: false,
      dataPercentage90: false,
      dataPercentage100: false,
      smsPercentage50: false,
    },
    {
      dataPercentage50: false,
      dataPercentage75: false,
      dataPercentage90: false,
      dataPercentage100: false,
      smsPercentage50: false,
    }
  ],
  enablePromoExp: true,
};
```

