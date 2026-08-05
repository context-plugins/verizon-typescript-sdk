
# Device Activation Request

Request for device status to check availability of activation.

## Structure

`DeviceActivationRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountName` | `string` | Required | The name of a billing account. |
| `devices` | [`AccountDeviceList[]`](../../doc/models/account-device-list.md) | Required | Up to 10,000 devices that you want to move to a different account, specified by device identifier. |

## Example

```ts
import { DeviceActivationRequest } from 'verizonlib';

const deviceActivationRequest: DeviceActivationRequest = {
  accountName: '0212345678-00001',
  devices: [
    {
      deviceIds: [
        {
          id: '15-digit IMEI',
          kind: 'imei',
        }
      ],
      ipaddress: 'ipAddress4',
    }
  ],
};
```

