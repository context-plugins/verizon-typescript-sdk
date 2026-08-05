
# Dto Device Action Set Request

## Structure

`DtoDeviceActionSetRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountname` | `string \| undefined` | Optional | The numeric account name, which must include leading zeros |
| `configuration` | [`DtoDeviceActionSetConfiguration \| undefined`](../../doc/models/dto-device-action-set-configuration.md) | Optional | - |
| `resourceidentifier` | [`DtoDeviceResourceIdentifier \| undefined`](../../doc/models/dto-device-resource-identifier.md) | Optional | Device identifiers, one or more are required |

## Example

```ts
import { DtoDeviceActionSetRequest } from 'verizonlib';

const dtoDeviceActionSetRequest: DtoDeviceActionSetRequest = {
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

