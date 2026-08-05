
# Anomaly Detection Settings

Settings for anomaly detection.

## Structure

`AnomalyDetectionSettings`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountName` | `string \| undefined` | Optional | Indicates if the account name used has anomaly detection.<br />Success - The account has anomaly detection.<br />Failure - The account does not have anomaly detection. |
| `sensitivityParameter` | [`SensitivityParameters \| undefined`](../../doc/models/sensitivity-parameters.md) | Optional | Details for sensitivity parameters. |
| `status` | `string \| undefined` | Optional | Indicates if anomaly detection is active on the account<br />Active - Anomaly detection is active<br />Disabled- Anomaly detection is not active. |

## Example

```ts
import { AnomalyDetectionSettings } from 'verizonlib';

const anomalyDetectionSettings: AnomalyDetectionSettings = {
  accountName: 'Success',
  sensitivityParameter: {
    abnormalMaxValue: 1.1,
    enableAbnormal: true,
    enableVeryAbnormal: true,
    veryAbnormalMaxValue: 0.55,
  },
  status: 'Active',
};
```

