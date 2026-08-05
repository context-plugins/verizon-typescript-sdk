
# Subscribe Request

## Structure

`SubscribeRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountName` | `string` | Required | - |
| `deviceInfo` | [`QosDeviceInfo[]`](../../doc/models/qos-device-info.md) | Required | - |

## Example

```ts
import { SubscribeRequest } from 'verizonlib';

const subscribeRequest: SubscribeRequest = {
  accountName: '0000123456-00001',
  deviceInfo: [
    {
      deviceId: {
        id: '10-digit phone number',
        kind: 'mdn',
      },
      flowInfo: [
        {
          flowServer: '[IPv6 address]:port',
          flowDevice: '[IPv6 address]:port',
          flowDirection: 'UPLINK',
          flowProtocol: 'UDP',
          qciOption: 'Premium',
        }
      ],
      deviceIPv6Addr: 'IPv6 address',
    }
  ],
};
```

