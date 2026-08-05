
# Qos Device Info

## Structure

`QosDeviceInfo`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `deviceId` | [`QosDeviceId`](../../doc/models/qos-device-id.md) | Required | - |
| `deviceIPv6Addr` | `string \| undefined` | Optional | - |
| `flowInfo` | [`FlowInfo[]`](../../doc/models/flow-info.md) | Required | - |

## Example

```ts
import { QosDeviceInfo } from 'verizonlib';

const qosDeviceInfo: QosDeviceInfo = {
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
};
```

