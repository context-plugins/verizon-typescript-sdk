
# Dto Device Action Set Configuration

## Structure

`DtoDeviceActionSetConfiguration`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `deviceConfig` | [`DtoDeviceConfig \| undefined`](../../doc/models/dto-device-config.md) | Optional | - |

## Example

```ts
import { DtoDeviceActionSetConfiguration } from 'verizonlib';

const dtoDeviceActionSetConfiguration: DtoDeviceActionSetConfiguration = {
  deviceConfig: {
    ble: {
      dataMode: 216,
      manufacturerId: 180,
      maxNumScan: 126,
      minSigStr: 60,
      monitorPeriod: 88,
    },
  },
};
```

