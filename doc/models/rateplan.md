
# Rateplan

## Structure

`Rateplan`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `ratePlanGroup` | [`RateplanRatePlanGroup[] \| undefined`](../../doc/models/containers/rateplan-rate-plan-group.md) | Optional | This is Array of a container for any-of cases. |

## Example

```ts
import { Rateplan } from 'verizonlib';

const rateplan: Rateplan = {
  ratePlanGroup: [
    {
      ratePlanGroupDescription: 'ratePlanGroupDescription4',
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
    },
    {
      ratePlanGroupDescription: 'ratePlanGroupDescription4',
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
    },
    {
      ratePlanGroupDescription: 'ratePlanGroupDescription4',
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
    }
  ],
};
```

