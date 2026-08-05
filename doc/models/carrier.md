
# Carrier

## Structure

`Carrier`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `carriers` | `string \| undefined` | Optional | The list of carriers with active or available profiles<br><br>**Constraints**: *Minimum Length*: `3`, *Maximum Length*: `32`, *Pattern*: `^[0-9]{3,32}$` |

## Example

```ts
import { Carrier } from 'verizonlib';

const carrier: Carrier = {
  carriers: 'carriers6',
};
```

