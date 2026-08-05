
# Change PWN Device Profile Request

## Structure

`ChangePWNDeviceProfileRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountName` | `string` | Required | - |
| `deviceList` | [`PWNDeviceList[]`](../../doc/models/pwn-device-list.md) | Required | - |
| `newProfile` | `string` | Required | - |

## Example

```ts
import { ChangePWNDeviceProfileRequest } from 'verizonlib';

const changePWNDeviceProfileRequest: ChangePWNDeviceProfileRequest = {
  accountName: '0342351414-00001',
  deviceList: [
    {
      deviceIds: [
        {
          id: '99948099913024600000',
          kind: 'iccid',
        }
      ],
    }
  ],
  newProfile: 'HSS EsmProfile Enterprise 5G internet',
};
```

