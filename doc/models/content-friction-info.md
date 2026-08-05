
# Content Friction Info

## Structure

`ContentFrictionInfo`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `frictionInfo` | [`FrictionInformation`](../../doc/models/friction-information.md) | Required | - |

## Example

```ts
import { ContentFrictionInfo, Type6Enum } from 'verizonlib';

const contentFrictionInfo: ContentFrictionInfo = {
  frictionInfo: {
    roadSurfaceDescription: {
      portlandCement: {
        type: Type6Enum.Traveled,
      },
    },
  },
};
```

