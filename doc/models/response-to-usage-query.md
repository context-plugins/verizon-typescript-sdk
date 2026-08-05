
# Response to Usage Query

## Structure

`ResponseToUsageQuery`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `hasmoredata` | `boolean \| undefined` | Optional | - |
| `deviceId` | [`ReadySimDeviceId \| undefined`](../../doc/models/ready-sim-device-id.md) | Optional | - |
| `usageHistory` | [`UsageHistory[] \| undefined`](../../doc/models/usage-history.md) | Optional | - |

## Example

```ts
import { ResponseToUsageQuery } from 'verizonlib';

const responseToUsageQuery: ResponseToUsageQuery = {
  hasmoredata: false,
  deviceId: {
    kind: 'kind8',
    id: 'id0',
  },
  usageHistory: [
    {
      bytesUsed: 76,
      serviceplan: 'serviceplan2',
      smsUsed: 176,
      moSMS: 230,
      mtSMS: 18,
    },
    {
      bytesUsed: 76,
      serviceplan: 'serviceplan2',
      smsUsed: 176,
      moSMS: 230,
      mtSMS: 18,
    },
    {
      bytesUsed: 76,
      serviceplan: 'serviceplan2',
      smsUsed: 176,
      moSMS: 230,
      mtSMS: 18,
    }
  ],
};
```

