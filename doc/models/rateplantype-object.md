
# Rateplantype Object

## Structure

`RateplantypeObject`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `ratePlanGroupDescription` | `string \| undefined` | Optional | - |
| `ratePlanType` | `string \| undefined` | Optional | - |
| `ratePlan` | [`Rateplantype2[] \| undefined`](../../doc/models/rateplantype-2.md) | Optional | An array of rateplan names |

## Example

```ts
import { RateplantypeObject } from 'verizonlib';

const rateplantypeObject: RateplantypeObject = {
  ratePlanGroupDescription: 'AGS Description_73',
  ratePlanType: 'ratePlanType2',
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
    }
  ],
};
```

