
# Change PWN Device Ipaddress Request

## Structure

`ChangePWNDeviceIpaddressRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountName` | `string` | Required | - |
| `deviceList` | [`DeviceListIP[]`](../../doc/models/device-list-ip.md) | Required | - |

## Example

```ts
import { ChangePWNDeviceIpaddressRequest } from 'verizonlib';

const changePWNDeviceIpaddressRequest: ChangePWNDeviceIpaddressRequest = {
  accountName: '0342351414-00001',
  deviceList: [
    {
      deviceIds: [
        {
          id: '99948099913024600000',
          kind: 'iccid',
        }
      ],
      ipaddress: '10.3.4.5',
    },
    {
      deviceIds: [
        {
          id: '999480500019111000001',
          kind: 'iccid',
        }
      ],
      ipaddress: '10.4.5.7',
    }
  ],
};
```

