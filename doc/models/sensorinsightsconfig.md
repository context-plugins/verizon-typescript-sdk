
# Sensorinsightsconfig

The configuration of the remove request

## Structure

`Sensorinsightsconfig`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `removesensor` | [`DtoOffBoardSensor \| undefined`](../../doc/models/dto-off-board-sensor.md) | Optional | The EUI64 address of the device being removed |

## Example

```ts
import { Sensorinsightsconfig } from 'verizonlib';

const sensorinsightsconfig: Sensorinsightsconfig = {
  removesensor: {
    deveui: 'deveui6',
  },
};
```

