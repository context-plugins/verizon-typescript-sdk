
# Description of Road Surface Grass

## Structure

`DescriptionOfRoadSurfaceGrass`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `grass` | [`Grass`](../../doc/models/grass.md) | Required | Indicates the surface of the roadway is grass. |

## Example

```ts
import { DescriptionOfRoadSurfaceGrass, Type9Enum } from 'verizonlib';

const descriptionOfRoadSurfaceGrass: DescriptionOfRoadSurfaceGrass = {
  grass: {
    type: Type9Enum.LessThan30Mph,
  },
};
```

