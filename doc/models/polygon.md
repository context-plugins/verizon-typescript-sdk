
# Polygon

A Polygon is a type of geometry that represents a collection of points that form a closed ring.

NOTE: This API only supports a single polygon in the Polygon geometry, so holes cannot be defines at this point. Support for hole will be added in future releases.

## Structure

`Polygon`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `type` | [`Type3Enum`](../../doc/models/type-3-enum.md) | Required | - |
| `coordinates` | `number[]` | Required | **Constraints**: *Minimum Items*: `1`, *Maximum Items*: `1`, `>= -180`, `<= 180` |

## Example

```ts
import { Polygon, Type3Enum } from 'verizonlib';

const polygon: Polygon = {
  type: Type3Enum.Polygon,
  coordinates: [
    System.Object[]System.Object[],
    System.Object[]System.Object[]
  ],
};
```

