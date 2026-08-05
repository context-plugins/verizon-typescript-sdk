
# A Request Body for Usage

## Structure

`ARequestBodyForUsage`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `deviceId` | [`ReadySimDeviceId[] \| undefined`](../../doc/models/ready-sim-device-id.md) | Optional | - |
| `startTime` | `string \| undefined` | Optional | - |
| `endTime` | `string \| undefined` | Optional | - |

## Example

```ts
import { ARequestBodyForUsage } from 'verizonlib';

const aRequestBodyForUsage: ARequestBodyForUsage = {
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

