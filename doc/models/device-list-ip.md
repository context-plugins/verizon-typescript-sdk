
# Device List IP

## Structure

`DeviceListIP`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `deviceIds` | [`PWNDeviceId[]`](../../doc/models/pwn-device-id.md) | Required | - |
| `ipaddress` | `string` | Required | - |

## Example

```ts
import { DeviceListIP } from 'verizonlib';

const deviceListIP: DeviceListIP = {
  deviceIds: [
    {
      id: '99948099913024600000',
      kind: 'iccid',
    }
  ],
  ipaddress: '10.3.4.5',
};
```

