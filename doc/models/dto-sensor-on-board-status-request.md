
# Dto Sensor on Board Status Request

## Structure

`DtoSensorOnBoardStatusRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountname` | `string \| undefined` | Optional | The numeric account name, which must include leading zeros |
| `gatewayidentifier` | [`Gatewayidentifier \| undefined`](../../doc/models/gatewayidentifier.md) | Optional | - |
| `onboarding` | [`Onboarding \| undefined`](../../doc/models/onboarding.md) | Optional | - |

## Example

```ts
import { DtoSensorOnBoardStatusRequest } from 'verizonlib';

const dtoSensorOnBoardStatusRequest: DtoSensorOnBoardStatusRequest = {
  accountname: '0000123456-00001',
  gatewayidentifier: {
    deviceid: 'deviceid0',
  },
  onboarding: {
    sensoridentifier: 'sensoridentifier4',
  },
};
```

