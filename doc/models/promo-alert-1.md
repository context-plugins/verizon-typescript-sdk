
# Promo Alert 1

## Structure

`PromoAlert1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `filterCriteria` | `unknown[] \| undefined` | Optional | - |
| `condition` | [`Keyschunk2[] \| undefined`](../../doc/models/keyschunk-2.md) | Optional | - |
| `enablePromoExp` | `boolean \| undefined` | Optional | - |

## Example

```ts
import { PromoAlert1 } from 'verizonlib';

const promoAlert1: PromoAlert1 = {
  filterCriteria: [
    { 'key1': 'val1', 'key2': 'val2' },
    { 'key1': 'val1', 'key2': 'val2' },
    { 'key1': 'val1', 'key2': 'val2' }
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
    }
  ],
  enablePromoExp: true,
};
```

