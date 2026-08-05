
# ESIM Profile Request 2

## Structure

`ESIMProfileRequest2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `devices` | [`ESIMDeviceList[] \| undefined`](../../doc/models/esim-device-list.md) | Optional | **Constraints**: *Maximum Items*: `100` |
| `accountName` | `string \| undefined` | Optional | - |
| `servicePlan` | `string \| undefined` | Optional | - |
| `mdnZipCode` | `string \| undefined` | Optional | - |

## Example

```ts
import { ESIMProfileRequest2 } from 'verizonlib';

const eSIMProfileRequest2: ESIMProfileRequest2 = {
  devices: [
    {
      deviceIds: [
        {
          id: 'id4',
          kind: 'kind2',
        }
      ],
    },
    {
      deviceIds: [
        {
          id: 'id4',
          kind: 'kind2',
        }
      ],
    }
  ],
  accountName: '0000123456-00001',
  servicePlan: 'The service plan name',
  mdnZipCode: 'five digit zip code',
};
```

