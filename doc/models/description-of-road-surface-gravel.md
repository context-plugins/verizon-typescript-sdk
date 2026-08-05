
# Description of Road Surface Gravel

## Structure

`DescriptionOfRoadSurfaceGravel`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `gravel` | [`Gravel`](../../doc/models/gravel.md) | Required | Indicates the surface of the roadway is gravel. |

## Example

```ts
import { DescriptionOfRoadSurfaceGravel, Type8Enum } from 'verizonlib';

const descriptionOfRoadSurfaceGravel: DescriptionOfRoadSurfaceGravel = {
  gravel: {
    type: Type8Enum.PackedOiled,
  },
};
```

