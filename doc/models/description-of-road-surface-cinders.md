
# Description of Road Surface Cinders

## Structure

`DescriptionOfRoadSurfaceCinders`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `cinders` | [`Cinders`](../../doc/models/cinders.md) | Required | Indicates the surface of the roadway is cinders. |

## Example

```ts
import { DescriptionOfRoadSurfaceCinders, Type10Enum } from 'verizonlib';

const descriptionOfRoadSurfaceCinders: DescriptionOfRoadSurfaceCinders = {
  cinders: {
    type: Type10Enum.Packed,
  },
};
```

