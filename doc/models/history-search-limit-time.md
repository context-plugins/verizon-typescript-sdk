
# History Search Limit Time

The time period for which a request should retrieve data, beginning with the limitTime.startOn and proceeding with the limitTime.duration.

## Structure

`HistorySearchLimitTime`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `startOn` | `string \| undefined` | Optional | The starting date-time for this request. |
| `duration` | [`NumericalData \| undefined`](../../doc/models/numerical-data.md) | Optional | Describes value and unit of time. |

## Example

```ts
import { HistorySearchLimitTime, NumericalDataUnitEnum } from 'verizonlib';

const historySearchLimitTime: HistorySearchLimitTime = {
  startOn: '2019-08-29T00:47:59.240Z',
  duration: {
    value: 5,
    unit: NumericalDataUnitEnum.SECOND,
  },
};
```

