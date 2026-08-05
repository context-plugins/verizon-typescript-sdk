
# Get Device Statuses Requestforplanner

## Structure

`GetDeviceStatusesRequestforplanner`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountNumber` | `string \| null \| undefined` | Optional | The numeric name of the account, including leading zeros. |
| `requestId` | `string \| null \| undefined` | Optional | The unique ID of a request. This is a UUID value. |
| `devices` | [`DeviceListforplanner[] \| null \| undefined`](../../doc/models/device-listforplanner.md) | Optional | - |

## Example

```ts
import { GetDeviceStatusesRequestforplanner } from 'verizonlib';

const getDeviceStatusesRequestforplanner: GetDeviceStatusesRequestforplanner = {
  accountNumber: '0000123456-00001',
  requestId: 'd24cc6e4-eeee-ffff-gggg-0ffbb091c076',
  devices: [
    {
      deviceIds: [
        {
          kind: 'kind8',
          id: 'id0',
        }
      ],
      privateNetworkApns: [
        {
          apnName: 'apnName2',
          addressAssignmentMethod: 'addressAssignmentMethod8',
          ipaddress: 'ipAddress4',
        },
        {
          apnName: 'apnName2',
          addressAssignmentMethod: 'addressAssignmentMethod8',
          ipaddress: 'ipAddress4',
        }
      ],
      ipaddress: 'ipAddress4',
      activationCode: 'activationCode2',
    }
  ],
};
```

