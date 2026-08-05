
# Dto on Board Sensor Request

## Structure

`DtoOnBoardSensorRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountname` | `string \| undefined` | Optional | The numeric account name, which must include leading zeros |
| `payload` | [`Payload \| undefined`](../../doc/models/payload.md) | Optional | - |

## Example

```ts
import { DtoOnBoardSensorRequest } from 'verizonlib';

const dtoOnBoardSensorRequest: DtoOnBoardSensorRequest = {
  accountname: '0000123456-00001',
  payload: {
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
  },
};
```

