
# Description of Road Surface Ice

## Structure

`DescriptionOfRoadSurfaceIce`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `ice` | [`Ice`](../../doc/models/ice.md) | Required | Indicates the surface of the roadway is ice. |

## Example

```ts
import { DescriptionOfRoadSurfaceIce, Type12Enum } from 'verizonlib';

const descriptionOfRoadSurfaceIce: DescriptionOfRoadSurfaceIce = {
  ice: {
    type: Type12Enum.Smooth,
  },
};
```

