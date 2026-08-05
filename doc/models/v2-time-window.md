
# V2 Time Window

Allowed start and end time windows.

## Structure

`V2TimeWindow`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `startTime` | `number` | Required | Start hour in range [0..23], current hour >= startTime. |
| `endTime` | `number` | Required | End hour in range [1..24], current hour < endTime. |

## Example

```ts
import { V2TimeWindow } from 'verizonlib';

const v2TimeWindow: V2TimeWindow = {
  startTime: 20,
  endTime: 21,
};
```

