
# Device Service Information

Device service information.

## Structure

`DeviceServiceInformation`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `responseType` | [`ApiResponseCode \| undefined`](../../doc/models/api-response-code.md) | Optional | ResponseCode and/or a message indicating success or failure of the request. |
| `imei` | `string` | Required | The International Mobile Equipment Identifier of the device. |
| `bullseyeEnable` | [`HplBullseyeEnable`](../../doc/models/hpl-bullseye-enable.md) | Required | A flag that shows if Hyper Precise is enabled (true) or disabled (false). |

## Example

```ts
import { DeviceServiceInformation, ResponseCodeEnum } from 'verizonlib';

const deviceServiceInformation: DeviceServiceInformation = {
  imei: '15-digit IMEI',
  bullseyeEnable: {
    bullseyeEnable: true,
  },
  responseType: {
    responseCode: ResponseCodeEnum.INTERNALERROR,
    message: 'message8',
  },
};
```

