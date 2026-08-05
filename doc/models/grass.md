
# Grass

Indicates the surface of the roadway is grass.

## Structure

`Grass`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `type` | [`Type9Enum \| undefined`](../../doc/models/type-9-enum.md) | Optional | Indicates the surface of the roadway is grass with low speed limit. |

## Example

```ts
import { Grass, Type9Enum } from 'verizonlib';

const grass: Grass = {
  type: Type9Enum.LessThan30Mph,
};
```

