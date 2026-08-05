
# Description of Road Surface Snow

## Structure

`DescriptionOfRoadSurfaceSnow`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `snow` | [`Snow`](../../doc/models/snow.md) | Required | Indicates the surface of the roadway is snow. |

## Example

```ts
import { DescriptionOfRoadSurfaceSnow, Type13Enum } from 'verizonlib';

const descriptionOfRoadSurfaceSnow: DescriptionOfRoadSurfaceSnow = {
  snow: {
    type: Type13Enum.Packed,
  },
};
```

