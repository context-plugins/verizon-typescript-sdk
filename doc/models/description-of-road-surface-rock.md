
# Description of Road Surface Rock

## Structure

`DescriptionOfRoadSurfaceRock`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `rock` | [`Rock`](../../doc/models/rock.md) | Required | Indicates the surface of the roadway is rock. |

## Example

```ts
import { DescriptionOfRoadSurfaceRock, Type11Enum } from 'verizonlib';

const descriptionOfRoadSurfaceRock: DescriptionOfRoadSurfaceRock = {
  rock: {
    type: Type11Enum.Crushed,
  },
};
```

