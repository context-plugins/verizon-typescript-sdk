
# Keyschunk 2

## Structure

`Keyschunk2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `dataPercentage50` | `boolean \| undefined` | Optional | - |
| `dataPercentage75` | `boolean \| undefined` | Optional | - |
| `dataPercentage90` | `boolean \| undefined` | Optional | - |
| `dataPercentage100` | `boolean \| undefined` | Optional | - |
| `smsPercentage50` | `boolean \| undefined` | Optional | - |
| `smsPercentage75` | `boolean \| undefined` | Optional | - |
| `smsPercentage90` | `boolean \| undefined` | Optional | - |
| `smsPercentage100` | `boolean \| undefined` | Optional | - |
| `noOfDaysB4PromoExp` | `number \| undefined` | Optional | - |

## Example

```ts
import { Keyschunk2 } from 'verizonlib';

const keyschunk2: Keyschunk2 = {
  dataPercentage50: false,
  dataPercentage75: false,
  dataPercentage90: false,
  dataPercentage100: false,
  smsPercentage50: false,
  smsPercentage75: false,
  smsPercentage90: false,
  smsPercentage100: true,
  noOfDaysB4PromoExp: 5,
};
```

