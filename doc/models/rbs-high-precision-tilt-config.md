
# Rbs High Precision Tilt Config

## Structure

`RbsHighPrecisionTiltConfig`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `mode` | [`ModeEnum \| undefined`](../../doc/models/mode-enum.md) | Optional | the reporting mode of the tilt sensor |
| `periodicReporting` | [`PeriodicReporting \| undefined`](../../doc/models/periodic-reporting.md) | Optional | The units and values of the time interval for the sensor to send a report |
| `holdTime` | `number \| undefined` | Optional | The time the threshold condition exists, in milliseconds, to recognize an event |
| `angleAway` | `number \| undefined` | Optional | the threshold value, from verticle, to recognize an event |
| `angleToward` | `number \| undefined` | Optional | the threshold value, moving towards  verticle, to recognize an event |
| `tscore` | [`Tscore \| undefined`](../../doc/models/tscore.md) | Optional | - |

## Example

```ts
import { ModeEnum, RbsHighPrecisionTiltConfig, UnitEnum } from 'verizonlib';

const rbsHighPrecisionTiltConfig: RbsHighPrecisionTiltConfig = {
  mode: ModeEnum.ReportOnChange,
  periodicReporting: {
    unit: UnitEnum.Minutes,
    hours: 250,
    minutes: 232,
  },
  holdTime: 5000,
  angleAway: 5,
  angleToward: 5,
};
```

