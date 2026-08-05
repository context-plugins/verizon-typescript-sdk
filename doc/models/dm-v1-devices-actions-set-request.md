
# Dm V1 Devices Actions Set Request

## Structure

`DmV1DevicesActionsSetRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountname` | `string \| undefined` | Optional | The numeric account name, which must include leading zeros |
| `configuration` | [`DtoDeviceActionSetConfiguration1 \| undefined`](../../doc/models/dto-device-action-set-configuration-1.md) | Optional | - |
| `resourceidentifier` | [`DtoDeviceResourceIdentifier1 \| undefined`](../../doc/models/dto-device-resource-identifier-1.md) | Optional | Device identifiers, one or more are required |

## Example

```ts
import { DmV1DevicesActionsSetRequest, ModeEnum, UnitEnum } from 'verizonlib';

const dmV1DevicesActionsSetRequest: DmV1DevicesActionsSetRequest = {
  accountname: '0000123456-00001',
  configuration: {
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
  },
  resourceidentifier: {
    deveui: 'deveui2',
    deviceid: 'deviceid6',
    esn: 86,
    iccid: 'iccid0',
    imei: 2,
  },
};
```

