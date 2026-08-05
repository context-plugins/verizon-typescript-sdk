
# Activate Device Profile Request

## Structure

`ActivateDeviceProfileRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `devices` | [`DeviceList[]`](../../doc/models/device-list.md) | Required | **Constraints**: *Maximum Items*: `100` |
| `accountName` | `string` | Required | - |
| `servicePlan` | `string \| undefined` | Optional | - |
| `mdnZipCode` | `string \| undefined` | Optional | - |

## Example

```ts
import { ActivateDeviceProfileRequest } from 'verizonlib';

const activateDeviceProfileRequest: ActivateDeviceProfileRequest = {
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
  accountName: '0000123456-00001',
  servicePlan: 'The service plan name',
  mdnZipCode: 'five digit zip code',
};
```

