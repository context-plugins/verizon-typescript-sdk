
# Dto Sensor Off Boarding Status Response

## Structure

`DtoSensorOffBoardingStatusResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `events` | [`DtoSensorBoardingEvent[] \| undefined`](../../doc/models/dto-sensor-boarding-event.md) | Optional | **Constraints**: *Maximum Items*: `100` |
| `isstillregistered` | `boolean \| undefined` | Optional | - |

## Example

```ts
import { DtoSensorOffBoardingStatusResponse } from 'verizonlib';

const dtoSensorOffBoardingStatusResponse: DtoSensorOffBoardingStatusResponse = {
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
    }
  ],
  isstillregistered: true,
};
```

