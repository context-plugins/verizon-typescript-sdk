
# Qos Device Id

## Structure

`QosDeviceId`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string \| undefined` | Optional | - |
| `kind` | `string \| undefined` | Optional | - |

## Example

```ts
import { QosDeviceId } from 'verizonlib';

const qosDeviceId: QosDeviceId = {
  id: '10-digit phone number',
  kind: 'mdn',
};
```

