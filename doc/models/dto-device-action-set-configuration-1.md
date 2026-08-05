
# Dto Device Action Set Configuration 1

## Structure

`DtoDeviceActionSetConfiguration1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `deviceConfig` | [`DtoDeviceConfig \| undefined`](../../doc/models/dto-device-config.md) | Optional | - |
| `rbsHighPrecisionTiltConfig` | [`RbsHighPrecisionTiltConfig \| undefined`](../../doc/models/rbs-high-precision-tilt-config.md) | Optional | - |

## Example

```ts
import {
  DtoDeviceActionSetConfiguration1,
  ModeEnum,
  UnitEnum,
} from 'verizonlib';

const dtoDeviceActionSetConfiguration1: DtoDeviceActionSetConfiguration1 = {
  deviceConfig: {
    ble: {
      dataMode: 216,
      manufacturerId: 180,
      maxNumScan: 126,
      minSigStr: 60,
      monitorPeriod: 88,
    },
  },
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

