
# Payload

## Structure

`Payload`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `addsensor` | [`ResourceOnBoardSensor \| undefined`](../../doc/models/resource-on-board-sensor.md) | Optional | - |

## Example

```ts
import { Payload } from 'verizonlib';

const payload: Payload = {
  addsensor: {
    deveui: 'deveui6',
    appeui: 'appeui0',
    appkey: 'appkey0',
    mClass: 'class4',
    kind: 'kind8',
    description: 'description0',
    name: 'name0',
    customdata: {
      'key0': { 'key1': 'val1', 'key2': 'val2' },
      'key1': { 'key1': 'val1', 'key2': 'val2' },
      'key2': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
};
```

