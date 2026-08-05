
# Heading Range

Acceptable heading range for road users in degrees.

## Structure

`HeadingRange`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `min` | `number` | Required | The minimum value of heading in unit of degrees.<br><br>**Constraints**: `>= 0`, `<= 360` |
| `max` | `number` | Required | The maximum value of heading in unit of degrees.<br><br>**Constraints**: `>= 0`, `<= 360` |

## Example

```ts
import { HeadingRange } from 'verizonlib';

const headingRange: HeadingRange = {
  min: 174.44,
  max: 247.86,
};
```

