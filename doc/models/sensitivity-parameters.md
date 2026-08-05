
# Sensitivity Parameters

Details for sensitivity parameters.

## Structure

`SensitivityParameters`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `abnormalMaxValue` | `number \| undefined` | Optional | The maximum value of the threshold in the units being measured. |
| `enableAbnormal` | `boolean \| undefined` | Optional | If abnormal values are being monitored.<br />true - Monitor for abnormal values<br />false - Do not monitor for abnormal values. |
| `enableVeryAbnormal` | `boolean \| undefined` | Optional | If very abnormal values are being monitored.<br />true - Monitor for very abnormal values<br />false - Do not monitor for very abnormal values. |
| `veryAbnormalMaxValue` | `number \| undefined` | Optional | The maximum value of the threshold in the units being measured. |

## Example

```ts
import { SensitivityParameters } from 'verizonlib';

const sensitivityParameters: SensitivityParameters = {
  abnormalMaxValue: 1.1,
  enableAbnormal: true,
  enableVeryAbnormal: true,
  veryAbnormalMaxValue: 0.55,
};
```

