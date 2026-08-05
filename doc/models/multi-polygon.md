
# Multi Polygon

A MultiPolygon is a type of geometry that represents a collection of Polygon geometries.

## Structure

`MultiPolygon`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `type` | [`Type5Enum`](../../doc/models/type-5-enum.md) | Required | - |
| `coordinates` | `number[]` | Required | **Constraints**: *Minimum Items*: `1`, *Maximum Items*: `10`, `>= -180`, `<= 180` |

## Example

```ts
import { MultiPolygon, Type5Enum } from 'verizonlib';

const multiPolygon: MultiPolygon = {
  type: Type5Enum.MultiPolygon,
  coordinates: [
    System.Object[]
  ],
};
```

