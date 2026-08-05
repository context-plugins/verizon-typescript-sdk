
# Line String

A LineString is a type of geometry that represents a collection of points that are connected by line segments.

## Structure

`LineString`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `type` | [`Type2Enum`](../../doc/models/type-2-enum.md) | Required | - |
| `coordinates` | `number[]` | Required | **Constraints**: *Minimum Items*: `2`, *Maximum Items*: `63`, `>= -180`, `<= 180` |

## Example

```ts
import { LineString, Type2Enum } from 'verizonlib';

const lineString: LineString = {
  type: Type2Enum.LineString,
  coordinates: [
    26.1126.12,
    26.1126.12
  ],
};
```

