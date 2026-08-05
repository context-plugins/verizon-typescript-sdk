
# V3 Time Window

Time window.

## Structure

`V3TimeWindow`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `startTime` | `number` | Required | Start hour in range [0..23], current hour >= startTime. |
| `endTime` | `number` | Required | End hour in range [1..24], current hour < endTime. |

## Example

```ts
import { V3TimeWindow } from 'verizonlib';

const v3TimeWindow: V3TimeWindow = {
  startTime: 18,
  endTime: 22,
};
```

