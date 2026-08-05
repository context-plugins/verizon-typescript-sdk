
# Device

Identifies a particular IoT device.

## Structure

`Device`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Required | Device identifier. |
| `kind` | `string` | Required | Device kind identifier. |

## Example

```ts
import { Device } from 'verizonlib';

const device: Device = {
  id: '864508030026238',
  kind: 'IMEI',
};
```

