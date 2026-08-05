
# Snow

Indicates the surface of the roadway is snow.

## Structure

`Snow`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `type` | [`Type13Enum \| undefined`](../../doc/models/type-13-enum.md) | Optional | Indicates the type of snow. |

## Example

```ts
import { Snow, Type13Enum } from 'verizonlib';

const snow: Snow = {
  type: Type13Enum.Packed,
};
```

