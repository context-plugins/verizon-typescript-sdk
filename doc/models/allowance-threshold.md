
# Allowance Threshold

## Structure

`AllowanceThreshold`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `percentage50` | `boolean \| undefined` | Optional | - |
| `percentage75` | `boolean \| undefined` | Optional | - |
| `percentage90` | `boolean \| undefined` | Optional | - |
| `percentage100` | `boolean \| undefined` | Optional | - |

## Example

```ts
import { AllowanceThreshold } from 'verizonlib';

const allowanceThreshold: AllowanceThreshold = {
  percentage50: true,
  percentage75: false,
  percentage90: true,
  percentage100: false,
};
```

