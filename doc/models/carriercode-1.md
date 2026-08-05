
# Carriercode 1

## Structure

`Carriercode1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `carrierCode` | `string \| undefined` | Optional | - |
| `percentage` | [`AllowanceThreshold \| undefined`](../../doc/models/allowance-threshold.md) | Optional | - |

## Example

```ts
import { Carriercode1 } from 'verizonlib';

const carriercode1: Carriercode1 = {
  carrierCode: 'Carrier identifier code 1',
  percentage: {
    percentage50: false,
    percentage75: false,
    percentage90: false,
    percentage100: false,
  },
};
```

