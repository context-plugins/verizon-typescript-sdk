
# Dto Health Score Summary

The values measured are for sensors and gateways

## Structure

`DtoHealthScoreSummary`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `overallsummary` | [`DtoHealthScoreMetric[] \| undefined`](../../doc/models/dto-health-score-metric.md) | Optional | **Constraints**: *Maximum Items*: `100` |

## Example

```ts
import { DtoHealthScoreSummary } from 'verizonlib';

const dtoHealthScoreSummary: DtoHealthScoreSummary = {
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

