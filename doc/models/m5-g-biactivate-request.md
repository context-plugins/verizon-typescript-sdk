
# M5 G Biactivate Request

## Structure

`M5gBiactivateRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountName` | `string \| undefined` | Optional | - |
| `servicePlan` | `string \| undefined` | Optional | - |
| `deviceListWithServiceAddress` | [`M5gBiactivateRequestDeviceListWithServiceAddress[] \| undefined`](../../doc/models/containers/m5-g-biactivate-request-device-list-with-service-address.md) | Optional | This is Array of a container for any-of cases. |
| `skuNumber` | `string \| undefined` | Optional | - |
| `publicIpRestriction` | `string \| undefined` | Optional | - |
| `carrierName` | `string \| undefined` | Optional | - |
| `mdnZipCode` | `string \| undefined` | Optional | - |

## Example

```ts
import { M5gBiactivateRequest } from 'verizonlib';

const m5gBiactivateRequest: M5gBiactivateRequest = {
  accountName: '0000123456-00001',
  servicePlan: 'service plan name',
  deviceListWithServiceAddress: [
    {
      deviceId: [
        {
          id: 'id0',
          kind: 'kind8',
        }
      ],
    },
    {
      deviceId: [
        {
          id: 'id0',
          kind: 'kind8',
        }
      ],
    }
  ],
  skuNumber: 'VZW Stock Keeping Unit number',
  publicIpRestriction: 'Unrestricted',
  carrierName: 'Verizon Wireless',
  mdnZipCode: '5-digit zip code',
};
```

