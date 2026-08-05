
# Device Profile Request

## Structure

`DeviceProfileRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `devices` | [`GIODeviceList[] \| undefined`](../../doc/models/gio-device-list.md) | Optional | **Constraints**: *Maximum Items*: `100` |
| `accountName` | `string \| undefined` | Optional | **Constraints**: *Minimum Length*: `3`, *Maximum Length*: `32`, *Pattern*: `^[0-9\-]{3,32}$` |
| `servicePlan` | `string \| undefined` | Optional | **Constraints**: *Minimum Length*: `3`, *Maximum Length*: `32`, *Pattern*: `^[A-Za-z0-9 ]{3,32}$` |

## Example

```ts
import { DeviceProfileRequest } from 'verizonlib';

const deviceProfileRequest: DeviceProfileRequest = {
  devices: [
    {
      deviceIds: [
        {
          kind: 'kind8',
          id: 'id0',
        }
      ],
    },
    {
      deviceIds: [
        {
          kind: 'kind8',
          id: 'id0',
        }
      ],
    },
    {
      deviceIds: [
        {
          kind: 'kind8',
          id: 'id0',
        }
      ],
    }
  ],
  accountName: '0000123456-00001',
  servicePlan: 'service plan name',
};
```

