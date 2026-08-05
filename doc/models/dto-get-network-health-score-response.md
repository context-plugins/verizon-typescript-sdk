
# Dto Get Network Health Score Response

The values measured are for the network

## Structure

`DtoGetNetworkHealthScoreResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `networksummary` | [`DtoHealthScoreMetric[] \| undefined`](../../doc/models/dto-health-score-metric.md) | Optional | **Constraints**: *Maximum Items*: `100` |
| `overallsummary` | [`DtoHealthScoreMetric[] \| undefined`](../../doc/models/dto-health-score-metric.md) | Optional | **Constraints**: *Maximum Items*: `100` |

## Example

```ts
import { DtoGetNetworkHealthScoreResponse } from 'verizonlib';

const dtoGetNetworkHealthScoreResponse: DtoGetNetworkHealthScoreResponse = {
  networksummary: [
    {
      metrictype: 'networkscore',
      metricvalue: '95',
    }
  ],
  overallsummary: [
    {
      metrictype: 'metrictype0',
      metricvalue: 'metricvalue6',
    },
    {
      metrictype: 'metrictype0',
      metricvalue: 'metricvalue6',
    }
  ],
};
```

