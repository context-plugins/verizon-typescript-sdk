
# Get Device Statuses Responseforplanner

## Structure

`GetDeviceStatusesResponseforplanner`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountNumber` | `string \| null \| undefined` | Optional | The numeric name of the account, including leading zeros. |
| `requestId` | `string \| null \| undefined` | Optional | - |
| `deviceStatusList` | [`DeviceStatusItemforplanner[] \| null \| undefined`](../../doc/models/device-status-itemforplanner.md) | Optional | - |

## Example

```ts
import { GetDeviceStatusesResponseforplanner } from 'verizonlib';

const getDeviceStatusesResponseforplanner: GetDeviceStatusesResponseforplanner = {
  accountNumber: '0000123456-00001',
  requestId: 'requestId4',
  deviceStatusList: [
    {
      deviceIds: [
        {
          kind: 'kind8',
          id: 'id0',
        }
      ],
      status: 'status6',
      reason: 'reason2',
    },
    {
      deviceIds: [
        {
          kind: 'kind8',
          id: 'id0',
        }
      ],
      status: 'status6',
      reason: 'reason2',
    },
    {
      deviceIds: [
        {
          kind: 'kind8',
          id: 'id0',
        }
      ],
      status: 'status6',
      reason: 'reason2',
    }
  ],
};
```

