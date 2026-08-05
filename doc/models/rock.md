
# Rock

Indicates the surface of the roadway is rock.

## Structure

`Rock`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `type` | [`Type11Enum \| undefined`](../../doc/models/type-11-enum.md) | Optional | Indicates the type of rock. |

## Example

```ts
import { Rock, Type11Enum } from 'verizonlib';

const rock: Rock = {
  type: Type11Enum.Crushed,
};
```

