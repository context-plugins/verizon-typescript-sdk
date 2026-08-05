
# Change PWN Device State Deactivate Request

## Structure

`ChangePWNDeviceStateDeactivateRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountName` | `string` | Required | - |
| `deviceList` | [`PWNDeviceList[]`](../../doc/models/pwn-device-list.md) | Required | - |

## Example

```ts
import { ChangePWNDeviceStateDeactivateRequest } from 'verizonlib';

const changePWNDeviceStateDeactivateRequest: ChangePWNDeviceStateDeactivateRequest = {
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
};
```

