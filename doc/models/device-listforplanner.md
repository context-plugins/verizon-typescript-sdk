
# Device Listforplanner

## Structure

`DeviceListforplanner`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `deviceIds` | [`DeviceIdforplanner[] \| null \| undefined`](../../doc/models/device-idforplanner.md) | Optional | - |
| `privateNetworkApns` | [`PrivateNetworkApns[] \| null \| undefined`](../../doc/models/private-network-apns.md) | Optional | - |
| `ipaddress` | `string \| null \| undefined` | Optional | A IPv4 address |
| `activationCode` | `string \| null \| undefined` | Optional | The activation code value. |

## Example

```ts
import { DeviceListforplanner } from 'verizonlib';

const deviceListforplanner: DeviceListforplanner = {
  deviceIds: [
    {
      kind: 'kind8',
      id: 'id0',
    },
    {
      kind: 'kind8',
      id: 'id0',
    },
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
  ipaddress: '10.10.10.01',
  activationCode: 'activationCode2',
};
```

