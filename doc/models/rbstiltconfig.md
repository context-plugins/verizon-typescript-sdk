
# Rbstiltconfig

## Structure

`Rbstiltconfig`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `rbsHighPrecisionTiltConfig` | [`RbsHighPrecisionTiltConfig \| undefined`](../../doc/models/rbs-high-precision-tilt-config.md) | Optional | - |

## Example

```ts
import { ModeEnum, Rbstiltconfig, UnitEnum } from 'verizonlib';

const rbstiltconfig: Rbstiltconfig = {
  rbsHighPrecisionTiltConfig: {
    mode: ModeEnum.ReportOnChange,
    periodicReporting: {
      unit: UnitEnum.Minutes,
      hours: 250,
      minutes: 232,
    },
    holdTime: 62,
    angleAway: 90,
    angleToward: 30,
  },
};
```

