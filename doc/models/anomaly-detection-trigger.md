
# Anomaly Detection Trigger

Trigger for anomaly detection.

## Structure

`AnomalyDetectionTrigger`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `triggerId` | `string \| undefined` | Optional | Trigger ID to identify the request in a callback. |

## Example

```ts
import { AnomalyDetectionTrigger } from 'verizonlib';

const anomalyDetectionTrigger: AnomalyDetectionTrigger = {
  triggerId: '595f5c44-c31c-4552-8670-020a1545a84d',
};
```

