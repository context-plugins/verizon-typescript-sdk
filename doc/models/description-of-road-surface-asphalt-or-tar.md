
# Description of Road Surface Asphalt or Tar

## Structure

`DescriptionOfRoadSurfaceAsphaltOrTar`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `asphaltOrTar` | [`AsphaltOrTar`](../../doc/models/asphalt-or-tar.md) | Required | Indicates the surface of the roadway is asphalt or tar. |

## Example

```ts
import { DescriptionOfRoadSurfaceAsphaltOrTar, Type7Enum } from 'verizonlib';

const descriptionOfRoadSurfaceAsphaltOrTar: DescriptionOfRoadSurfaceAsphaltOrTar = {
  asphaltOrTar: {
    type: Type7Enum.NewSharp,
  },
};
```

