
# Ready Sim Device Id

## Structure

`ReadySimDeviceId`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `kind` | `string \| undefined` | Optional | - |
| `id` | `string \| undefined` | Optional | - |

## Example

```ts
import { ReadySimDeviceId } from 'verizonlib';

const readySimDeviceId: ReadySimDeviceId = {
  kind: 'iccid',
  id: '20-digit iccid',
};
```

