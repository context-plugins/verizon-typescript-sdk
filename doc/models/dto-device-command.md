
# Dto Device Command

## Structure

`DtoDeviceCommand`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountName` | `string \| undefined` | Optional | The numeric account name, which must include leading zeros |
| `configuration` | [`Rbstiltconfig \| undefined`](../../doc/models/rbstiltconfig.md) | Optional | - |
| `resourceidentifier` | [`DtoResourceidentifier \| undefined`](../../doc/models/dto-resourceidentifier.md) | Optional | - |

## Example

```ts
import { DtoDeviceCommand, ModeEnum, UnitEnum } from 'verizonlib';

const dtoDeviceCommand: DtoDeviceCommand = {
  accountName: '0000123456-00001',
  configuration: {
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
  },
  resourceidentifier: {
    id: 'id4',
  },
};
```

