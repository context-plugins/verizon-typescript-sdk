
# GIO Deactivate Device Profile Request

## Structure

`GIODeactivateDeviceProfileRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `devices` | [`GIODeviceList[] \| undefined`](../../doc/models/gio-device-list.md) | Optional | **Constraints**: *Maximum Items*: `100` |
| `accountName` | `string \| undefined` | Optional | **Constraints**: *Minimum Length*: `3`, *Maximum Length*: `32`, *Pattern*: `^[0-9\-]{3,32}$` |
| `servicePlan` | `string \| undefined` | Optional | **Constraints**: *Minimum Length*: `3`, *Maximum Length*: `32`, *Pattern*: `^[A-Za-z0-9 ]{3,32}$` |
| `etfWaiver` | `boolean \| undefined` | Optional | **Default**: `false` |
| `reasonCode` | `string \| undefined` | Optional | **Constraints**: *Minimum Length*: `2`, *Maximum Length*: `32`, *Pattern*: `^[0-9A-Z]{2,32}$` |

## Example

```ts
import { GIODeactivateDeviceProfileRequest } from 'verizonlib';

const gIODeactivateDeviceProfileRequest: GIODeactivateDeviceProfileRequest = {
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
  etfWaiver: false,
  reasonCode: 'FF',
};
```

