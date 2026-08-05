
# Dto Off Board Sensor Request

## Structure

`DtoOffBoardSensorRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountname` | `string \| undefined` | Optional | The numeric account name, which must include leading zeros |
| `configuration` | [`Sensorinsightsconfig \| undefined`](../../doc/models/sensorinsightsconfig.md) | Optional | The configuration of the remove request |

## Example

```ts
import { DtoOffBoardSensorRequest } from 'verizonlib';

const dtoOffBoardSensorRequest: DtoOffBoardSensorRequest = {
  accountname: '0000123456-00001',
  configuration: {
    removesensor: {
      deveui: 'deveui6',
    },
  },
};
```

