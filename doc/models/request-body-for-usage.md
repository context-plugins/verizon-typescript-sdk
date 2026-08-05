
# Request Body for Usage

## Structure

`RequestBodyForUsage`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountId` | `string \| undefined` | Optional | - |
| `deviceId` | [`ReadySimDeviceId[] \| undefined`](../../doc/models/ready-sim-device-id.md) | Optional | - |
| `startTime` | `string \| undefined` | Optional | - |
| `endTime` | `string \| undefined` | Optional | - |

## Example

```ts
import { RequestBodyForUsage } from 'verizonlib';

const requestBodyForUsage: RequestBodyForUsage = {
  accountId: '0000123456-000001',
  deviceId: [
    {
      kind: 'kind8',
      id: 'id0',
    }
  ],
  startTime: '2021-08-15T00:00:00Z',
  endTime: '2021-08-16T00:00:00Z',
};
```

