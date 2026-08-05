
# Service Plan

Details of the service plan.

## Structure

`ServicePlan`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `carrierServicePlanCode` | `string \| undefined` | Optional | The code that is used by the carrier for the service plan. |
| `code` | `string \| undefined` | Optional | The code of the service plan, which may not be the same as the name. |
| `extendedAttributes` | [`CustomFields[] \| undefined`](../../doc/models/custom-fields.md) | Optional | Any extended attributes for the service plan, as Key and Value pairs. |
| `name` | `string \| undefined` | Optional | The name of the service plan. |
| `sizeKb` | `bigint \| undefined` | Optional | The size of the service plan in kilobytes. |

## Example

```ts
import { ServicePlan } from 'verizonlib';

const servicePlan: ServicePlan = {
  carrierServicePlanCode: '84638',
  code: 'M2MSHR5GB',
  extendedAttributes: [
    {
      key: 'key8',
      value: 'value0',
    }
  ],
  name: '2MSHR5GB',
  sizeKb: BigInt(0),
};
```

