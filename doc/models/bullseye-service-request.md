
# Bullseye Service Request

Account number and list of devices.

## Structure

`BullseyeServiceRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `deviceList` | [`DeviceServiceRequest[]`](../../doc/models/device-service-request.md) | Required | A list of devices. |
| `accountNumber` | `string` | Required | The numeric ID of the account and must include leading zeroes. This value is indentical to `accountName`. |

## Example

```ts
import { BullseyeServiceRequest } from 'verizonlib';

const bullseyeServiceRequest: BullseyeServiceRequest = {
  deviceList: [
    {
      imei: '15-digit IMEI',
      bullseyeEnable: {
        bullseyeEnable: true,
      },
    }
  ],
  accountNumber: '0000123456-00001',
};
```

