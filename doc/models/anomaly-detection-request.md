
# Anomaly Detection Request

Anomaly detection request.

## Structure

`AnomalyDetectionRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountName` | `string \| undefined` | Optional | The name of a billing account. An account name is usually numeric, and must include any leading zeros.<br><br>**Constraints**: *Minimum Length*: `3`, *Maximum Length*: `32` |
| `requestType` | `string \| undefined` | Optional | The type of request being made. anomaly is the request to activate anomaly detection. |
| `sensitivityParameter` | [`SensitivityParameters \| undefined`](../../doc/models/sensitivity-parameters.md) | Optional | Details for sensitivity parameters. |

## Example

```ts
import { AnomalyDetectionRequest } from 'verizonlib';

const anomalyDetectionRequest: AnomalyDetectionRequest = {
  accountName: '0000123456-00001',
  requestType: 'anomaly',
  sensitivityParameter: {
    abnormalMaxValue: 1.1,
    enableAbnormal: true,
    enableVeryAbnormal: true,
    veryAbnormalMaxValue: 0.55,
  },
};
```

