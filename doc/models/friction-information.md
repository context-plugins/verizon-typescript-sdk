
# Friction Information

## Structure

`FrictionInformation`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `roadSurfaceDescription` | [`DescriptionOfRoadSurface`](../../doc/models/containers/description-of-road-surface.md) | Required | Indicates the composition of the surface of the roadway for use in estimation of friction. |

## Example

```ts
import { FrictionInformation, Type6Enum } from 'verizonlib';

const frictionInformation: FrictionInformation = {
  roadSurfaceDescription: {
    portlandCement: {
      type: Type6Enum.Traveled,
    },
  },
};
```

