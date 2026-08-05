
# Dto Patch Device Request

## Structure

`DtoPatchDeviceRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountname` | `string \| undefined` | Optional | The numeric account name, which must include leading zeros |
| `device` | [`ResourceDevice \| undefined`](../../doc/models/resource-device.md) | Optional | - |
| `resourceidentifier` | [`DtoDeviceResourceIdentifier \| undefined`](../../doc/models/dto-device-resource-identifier.md) | Optional | Device identifiers, one or more are required |

## Example

```ts
import { DtoPatchDeviceRequest } from 'verizonlib';

const dtoPatchDeviceRequest: DtoPatchDeviceRequest = {
  accountname: '0000123456-00001',
  device: {
    createdon: '2016-03-13T12:52:32.123Z',
    foreignid: 'foreignid4',
    lastupdated: '2016-03-13T12:52:32.123Z',
    state: 'state2',
    versionid: 'versionid8',
    accountclientid: 'accountclientid2',
    billingaccountid: 'billingaccountid2',
    chipset: 'chipset6',
    customdata: {
      'key0': { 'key1': 'val1', 'key2': 'val2' }
    },
    description: 'description6',
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

