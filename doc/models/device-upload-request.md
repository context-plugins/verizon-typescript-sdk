
# Device Upload Request

## Structure

`DeviceUploadRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountName` | `string` | Required | - |
| `devices` | [`DeviceList[]`](../../doc/models/device-list.md) | Required | - |
| `emailAddress` | `string` | Required | - |
| `deviceSku` | `string` | Required | - |
| `uploadType` | `string` | Required | - |

## Example

```ts
import { DeviceUploadRequest } from 'verizonlib';

const deviceUploadRequest: DeviceUploadRequest = {
  accountName: '1223334444-00001',
  devices: [
    {
      deviceIds: [
        {
          id: 'id0',
          kind: 'kind8',
        }
      ],
    }
  ],
  emailAddress: 'bob@mycompany.com',
  deviceSku: 'VZW123456',
  uploadType: 'IMEI',
};
```

