
# Gravel

Indicates the surface of the roadway is gravel.

## Structure

`Gravel`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `type` | [`Type8Enum \| undefined`](../../doc/models/type-8-enum.md) | Optional | Indicates the type of gravel. |

## Example

```ts
import { Gravel, Type8Enum } from 'verizonlib';

const gravel: Gravel = {
  type: Type8Enum.PackedOiled,
};
```

