
# Description of Road Surface Portland Cement

## Structure

`DescriptionOfRoadSurfacePortlandCement`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `portlandCement` | [`PortlandCement`](../../doc/models/portland-cement.md) | Required | Indicates the surface of the roadway is portland cement. |

## Example

```ts
import {
  DescriptionOfRoadSurfacePortlandCement,
  Type6Enum,
} from 'verizonlib';

const descriptionOfRoadSurfacePortlandCement: DescriptionOfRoadSurfacePortlandCement = {
  portlandCement: {
    type: Type6Enum.Traveled,
  },
};
```

