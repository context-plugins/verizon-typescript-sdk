
# Get Devices Windows Requestforplanner

## Structure

`GetDevicesWindowsRequestforplanner`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountNumber` | `string \| null \| undefined` | Optional | The numeric name of the account, including leading zeros. |
| `filter` | `string \| null \| undefined` | Optional | what windows to filter for: All - all 24 windows in a day, Best - top 3 windows by RAN KPI, Worst - lowest 3 windows by RAN KPI |
| `devices` | [`DeviceListforplanner[] \| null \| undefined`](../../doc/models/device-listforplanner.md) | Optional | - |

## Example

```ts
import { GetDevicesWindowsRequestforplanner } from 'verizonlib';

const getDevicesWindowsRequestforplanner: GetDevicesWindowsRequestforplanner = {
  accountNumber: '0000123456-00001',
  filter: 'filter8',
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
    },
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
    },
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

