
# Stop Monitor Request

## Structure

`StopMonitorRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountName` | `string` | Required | - |
| `devices` | [`DeviceList[]`](../../doc/models/device-list.md) | Required | - |

## Example

```ts
import { StopMonitorRequest } from 'verizonlib';

const stopMonitorRequest: StopMonitorRequest = {
  accountName: '0000123456-00001',
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
};
```

