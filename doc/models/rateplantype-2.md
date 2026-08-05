
# Rateplantype 2

## Structure

`Rateplantype2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `description` | `string \| undefined` | Optional | - |
| `sizeKb` | `string \| undefined` | Optional | - |
| `carrierRatePlanCode` | `string \| undefined` | Optional | - |
| `zeroDollarBilling` | `boolean \| undefined` | Optional | - |
| `promotionOffered` | `boolean \| undefined` | Optional | - |
| `promotionDays` | `number \| undefined` | Optional | - |
| `ratePlanType` | `string \| undefined` | Optional | - |
| `account` | [`Accountid[] \| undefined`](../../doc/models/accountid.md) | Optional | Account information |

## Example

```ts
import { Rateplantype2 } from 'verizonlib';

const rateplantype2: Rateplantype2 = {
  description: 'PlanDescription 2',
  sizeKb: '1048576',
  carrierRatePlanCode: 'Service plan code value',
  zeroDollarBilling: false,
  promotionOffered: false,
  promotionDays: -2147483648,
};
```

