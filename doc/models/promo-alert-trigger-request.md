
# Promo Alert Trigger Request

## Structure

`PromoAlertTriggerRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `dataPercentage50` | `boolean \| undefined` | Optional | - |
| `dataPercentage75` | `boolean \| undefined` | Optional | - |
| `dataPercentage90` | `boolean \| undefined` | Optional | - |
| `noOfDaysB4PromoExp` | `number \| undefined` | Optional | **Constraints**: `>= 0`, `<= 180` |
| `smsPercentage50` | `boolean \| undefined` | Optional | - |
| `smsPercentage75` | `boolean \| undefined` | Optional | - |
| `smsPercentage90` | `boolean \| undefined` | Optional | - |

## Example

```ts
import { PromoAlertTriggerRequest } from 'verizonlib';

const promoAlertTriggerRequest: PromoAlertTriggerRequest = {
  dataPercentage50: false,
  dataPercentage75: false,
  dataPercentage90: false,
  noOfDaysB4PromoExp: 180,
  smsPercentage50: false,
};
```

