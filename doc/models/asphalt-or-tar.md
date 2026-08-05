
# Asphalt or Tar

Indicates the surface of the roadway is asphalt or tar.

## Structure

`AsphaltOrTar`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `type` | [`Type7Enum \| undefined`](../../doc/models/type-7-enum.md) | Optional | Indicates the type of asphalt or tar. |

## Example

```ts
import { AsphaltOrTar, Type7Enum } from 'verizonlib';

const asphaltOrTar: AsphaltOrTar = {
  type: Type7Enum.NewSharp,
};
```

