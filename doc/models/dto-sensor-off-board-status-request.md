
# Dto Sensor Off Board Status Request

## Structure

`DtoSensorOffBoardStatusRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountname` | `string \| undefined` | Optional | The numeric account name, which must include leading zeros |
| `gatewayidentifier` | [`Gatewayidentifier \| undefined`](../../doc/models/gatewayidentifier.md) | Optional | - |
| `offboarding` | [`Offboarding \| undefined`](../../doc/models/offboarding.md) | Optional | - |

## Example

```ts
import { DtoSensorOffBoardStatusRequest } from 'verizonlib';

const dtoSensorOffBoardStatusRequest: DtoSensorOffBoardStatusRequest = {
  accountname: '0000123456-00001',
  gatewayidentifier: {
    deviceid: 'deviceid0',
  },
  offboarding: {
    sensoridentifier: 'sensoridentifier8',
  },
};
```

