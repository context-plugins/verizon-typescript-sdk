
# M5 G Bidevice Detailsresponse

## Structure

`M5gBideviceDetailsresponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `hasMoreData` | `boolean \| undefined` | Optional | - |
| `devices` | [`M5gBideviceDetailsresponseDevices[] \| undefined`](../../doc/models/containers/m5-g-bidevice-detailsresponse-devices.md) | Optional | This is Array of a container for any-of cases. |

## Example

```ts
import { M5gBideviceDetailsresponse } from 'verizonlib';

const m5gBideviceDetailsresponse: M5gBideviceDetailsresponse = {
  hasMoreData: false,
  devices: [
    {
      accountName: 'accountName0',
      billingCycleEndDate: 'billingCycleEndDate6',
      carrierInformation: [
        {
          carrierName: 'carrierName4',
        },
        {
          carrierName: 'carrierName4',
        },
        {
          carrierName: 'carrierName4',
        }
      ],
      connected: false,
      createdAt: 'createdAt0',
    },
    {
      accountName: 'accountName0',
      billingCycleEndDate: 'billingCycleEndDate6',
      carrierInformation: [
        {
          carrierName: 'carrierName4',
        },
        {
          carrierName: 'carrierName4',
        },
        {
          carrierName: 'carrierName4',
        }
      ],
      connected: false,
      createdAt: 'createdAt0',
    }
  ],
};
```

