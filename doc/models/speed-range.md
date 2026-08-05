
# Speed Range

Acceptable speed range for road users in m/s.

## Structure

`SpeedRange`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `min` | `number` | Required | The minimum required speed in m/s.<br><br>**Constraints**: `>= 0`, `<= 160` |
| `max` | `number` | Required | The maximum acceptable speed in m/s.<br><br>**Constraints**: `>= 0`, `<= 160` |

## Example

```ts
import { SpeedRange } from 'verizonlib';

const speedRange: SpeedRange = {
  min: 89.68,
  max: 160,
};
```

