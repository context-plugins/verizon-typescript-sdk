
# Periodic Reporting

The units and values of the time interval for the sensor to send a report

## Structure

`PeriodicReporting`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `unit` | [`UnitEnum \| undefined`](../../doc/models/unit-enum.md) | Optional | - |
| `hours` | `number \| undefined` | Optional | whole numbers from 0 to 24 |
| `minutes` | `number \| undefined` | Optional | whole numbers from 0 to 59 |

## Example

```ts
import { PeriodicReporting, UnitEnum } from 'verizonlib';

const periodicReporting: PeriodicReporting = {
  unit: UnitEnum.Minutes,
  hours: 0,
  minutes: 12,
};
```

