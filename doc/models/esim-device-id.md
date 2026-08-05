
# ESIM Device Id

## Structure

`ESIMDeviceId`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string \| undefined` | Optional | - |
| `kind` | `string \| undefined` | Optional | - |

## Example

```ts
import { ESIMDeviceId } from 'verizonlib';

const eSIMDeviceId: ESIMDeviceId = {
  id: '32-digit EID',
  kind: 'eid',
};
```

