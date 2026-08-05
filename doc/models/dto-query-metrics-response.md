
# Dto Query Metrics Response

## Structure

`DtoQueryMetricsResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `critical` | `number \| undefined` | Optional | The number of critical alerts in the queried time period |
| `major` | `number \| undefined` | Optional | The number of major alerts in the queried time period |
| `minor` | `number \| undefined` | Optional | The number of minor alerts in the queried time period |
| `noalert` | `number \| undefined` | Optional | The number of sensor reports containing no  alerts in the queried time period |
| `total` | `number \| undefined` | Optional | The total number of alerts in the queried time period |
| `deltacritical` | `number \| undefined` | Optional | The change in the number of critical alerts in the queried time period |
| `deltamajor` | `number \| undefined` | Optional | The change in the number of major alerts in the queried time period |
| `deltaminor` | `number \| undefined` | Optional | The change in the number of minor alerts in the queried time period |
| `deltanoalert` | `number \| undefined` | Optional | The change in the number of sensor reports containing no alerts in the queried time period |

## Example

```ts
import { DtoQueryMetricsResponse } from 'verizonlib';

const dtoQueryMetricsResponse: DtoQueryMetricsResponse = {
  critical: 0,
  major: 0,
  minor: 0,
  noalert: 1,
  total: 1,
  deltacritical: -3,
  deltamajor: -1,
  deltaminor: 0,
  deltanoalert: -15,
};
```

