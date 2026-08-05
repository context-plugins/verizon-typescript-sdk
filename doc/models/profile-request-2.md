
# Profile Request 2

## Structure

`ProfileRequest2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `devices` | [`DeviceList2[] \| undefined`](../../doc/models/device-list-2.md) | Optional | **Constraints**: *Maximum Items*: `100` |
| `accountName` | `string \| undefined` | Optional | - |
| `carrierName` | `string \| undefined` | Optional | - |
| `reasonCode` | `string \| undefined` | Optional | - |
| `etfWaiver` | `boolean \| undefined` | Optional | **Default**: `true` |
| `checkFallbackProfile` | `boolean \| undefined` | Optional | **Default**: `false` |

## Example

```ts
import { ProfileRequest2 } from 'verizonlib';

const profileRequest2: ProfileRequest2 = {
  devices: [
    {
      ids: [
        {
          id: 'id4',
          kind: 'kind2',
        },
        {
          id: 'id4',
          kind: 'kind2',
        },
        {
          id: 'id4',
          kind: 'kind2',
        }
      ],
    },
    {
      ids: [
        {
          id: 'id4',
          kind: 'kind2',
        },
        {
          id: 'id4',
          kind: 'kind2',
        },
        {
          id: 'id4',
          kind: 'kind2',
        }
      ],
    }
  ],
  accountName: '0000123456-00001',
  carrierName: 'Verizon Wireless',
  reasonCode: 'FF',
  etfWaiver: true,
  checkFallbackProfile: false,
};
```

