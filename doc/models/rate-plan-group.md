
# Rate Plan Group

## Structure

`RatePlanGroup`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `ratePlanGroupDescription` | `string \| undefined` | Optional | - |
| `ratePlanType` | `unknown \| undefined` | Optional | - |
| `ratePlan` | [`Rateplantype2[] \| undefined`](../../doc/models/rateplantype-2.md) | Optional | An array of rateplan names |
| `description` | `string \| undefined` | Optional | - |
| `sizeKb` | `string \| undefined` | Optional | - |
| `carrierRatePlanCode` | `string \| undefined` | Optional | - |
| `zeroDollarBilling` | `boolean \| undefined` | Optional | - |
| `promotionOffered` | `boolean \| undefined` | Optional | - |
| `promotionDays` | `number \| undefined` | Optional | - |
| `account` | [`Accountid[] \| undefined`](../../doc/models/accountid.md) | Optional | Account information |

## Example

```ts
import { RatePlanGroup } from 'verizonlib';

const ratePlanGroup: RatePlanGroup = {
  ratePlanGroupDescription: 'AGS Description_73',
  ratePlanType: { 'key1': 'val1', 'key2': 'val2' },
  ratePlan: [
    {
      description: 'description2',
      sizeKb: 'sizeKb2',
      carrierRatePlanCode: 'carrierRatePlanCode8',
      zeroDollarBilling: false,
      promotionOffered: false,
    },
    {
      description: 'description2',
      sizeKb: 'sizeKb2',
      carrierRatePlanCode: 'carrierRatePlanCode8',
      zeroDollarBilling: false,
      promotionOffered: false,
    },
    {
      description: 'description2',
      sizeKb: 'sizeKb2',
      carrierRatePlanCode: 'carrierRatePlanCode8',
      zeroDollarBilling: false,
      promotionOffered: false,
    }
  ],
  description: 'PlanDescription 2',
  sizeKb: '1048576',
  carrierRatePlanCode: 'Service plan code value',
  zeroDollarBilling: false,
  promotionOffered: false,
  promotionDays: -2147483648,
};
```

