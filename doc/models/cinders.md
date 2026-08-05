
# Cinders

Indicates the surface of the roadway is cinders.

## Structure

`Cinders`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `type` | [`Type10Enum \| undefined`](../../doc/models/type-10-enum.md) | Optional | Indicates the type of cinders. |

## Example

```ts
import { Cinders, Type10Enum } from 'verizonlib';

const cinders: Cinders = {
  type: Type10Enum.Packed,
};
```

