
# Dto Health Score Metric

## Structure

`DtoHealthScoreMetric`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `metrictype` | `string \| undefined` | Optional | The type of measurement and can be overallscore, networkscore, gatewayscore, sensorscore, networkstatus, averagesignalstrength or networkavailabilitylast30 |
| `metricvalue` | `string \| undefined` | Optional | the value of the `metrictype` as a percentage |

## Example

```ts
import { DtoHealthScoreMetric } from 'verizonlib';

const dtoHealthScoreMetric: DtoHealthScoreMetric = {
  metrictype: 'overallscore',
  metricvalue: '95',
};
```

