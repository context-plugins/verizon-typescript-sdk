
# M5 G Bichange Request

## Structure

`M5gBichangeRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountName` | `string \| undefined` | Optional | - |
| `servicePlan` | `string \| undefined` | Optional | - |
| `deviceListWithServiceAddress` | [`M5gBichangeRequestDeviceListWithServiceAddress[] \| undefined`](../../doc/models/containers/m5-g-bichange-request-device-list-with-service-address.md) | Optional | This is Array of a container for any-of cases. |
| `currentServicePlan` | `string \| undefined` | Optional | - |

## Example

```ts
import { M5gBichangeRequest } from 'verizonlib';

const m5gBichangeRequest: M5gBichangeRequest = {
  accountName: '0000123456-00001',
  servicePlan: '5G BI service plan name being changed to',
  deviceListWithServiceAddress: [
    {
      deviceId: [
        {
          id: 'id0',
          kind: 'kind8',
        },
        {
          id: 'id0',
          kind: 'kind8',
        }
      ],
    }
  ],
  currentServicePlan: 'Optional name of the plan being changed from',
};
```

