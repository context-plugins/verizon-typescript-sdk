
# Change PWN Device State Activate Request

## Structure

`ChangePWNDeviceStateActivateRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountName` | `string` | Required | - |
| `deviceList` | [`PWNDeviceList[]`](../../doc/models/pwn-device-list.md) | Required | - |
| `activate` | [`Activate`](../../doc/models/activate.md) | Required | - |

## Example

```ts
import { ChangePWNDeviceStateActivateRequest } from 'verizonlib';

const changePWNDeviceStateActivateRequest: ChangePWNDeviceStateActivateRequest = {
  accountName: '0342351414-00001',
  deviceList: [
    {
      deviceIds: [
        {
          id: '99948099913024600001',
          kind: 'iccid',
        }
      ],
    }
  ],
  activate: {
    profile: 'HSS EsmProfile Enterprise 5G',
  },
};
```

