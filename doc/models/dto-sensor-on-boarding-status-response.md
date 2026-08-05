
# Dto Sensor on Boarding Status Response

## Structure

`DtoSensorOnBoardingStatusResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `events` | [`DtoSensorBoardingEvent[] \| undefined`](../../doc/models/dto-sensor-boarding-event.md) | Optional | **Constraints**: *Maximum Items*: `100` |

## Example

```ts
import { DtoSensorOnBoardingStatusResponse } from 'verizonlib';

const dtoSensorOnBoardingStatusResponse: DtoSensorOnBoardingStatusResponse = {
  events: [
    {
      createdon: '2016-03-13T12:52:32.123Z',
      errmsg: 'errmsg2',
      fields: {},
      state: 'state6',
      transactionid: 'transactionid8',
    },
    {
      createdon: '2016-03-13T12:52:32.123Z',
      errmsg: 'errmsg2',
      fields: {},
      state: 'state6',
      transactionid: 'transactionid8',
    },
    {
      createdon: '2016-03-13T12:52:32.123Z',
      errmsg: 'errmsg2',
      fields: {},
      state: 'state6',
      transactionid: 'transactionid8',
    }
  ],
};
```

