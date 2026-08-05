
# Bullseye Service Result

Status of Hyper Precise Location on the device.

## Structure

`BullseyeServiceResult`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountNumber` | `string \| undefined` | Optional | The numeric ID of the account and must include leading zeroes. This value is indentical to `accountName`. |
| `deviceList` | [`DeviceServiceInformation[] \| undefined`](../../doc/models/device-service-information.md) | Optional | List of devices. |
| `responseType` | [`ApiResponseCode \| undefined`](../../doc/models/api-response-code.md) | Optional | ResponseCode and/or a message indicating success or failure of the request. |

## Example

```ts
import { BullseyeServiceResult, ResponseCodeEnum } from 'verizonlib';

const bullseyeServiceResult: BullseyeServiceResult = {
  accountNumber: '0000123456-00001',
  deviceList: [
    {
      imei: 'imei4',
      bullseyeEnable: {
        bullseyeEnable: false,
      },
      responseType: {
        responseCode: ResponseCodeEnum.INTERNALERROR,
        message: 'message8',
      },
    }
  ],
  responseType: {
    responseCode: ResponseCodeEnum.INTERNALERROR,
    message: 'message8',
  },
};
```

