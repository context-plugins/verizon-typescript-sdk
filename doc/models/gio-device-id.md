
# GIO Device Id

## Structure

`GIODeviceId`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `kind` | `string` | Required | - |
| `id` | `string` | Required | - |

## Example

```ts
import { GIODeviceId } from 'verizonlib';

const gIODeviceId: GIODeviceId = {
  kind: 'eid',
  id: '12345678901234567890123456789012',
};
```

