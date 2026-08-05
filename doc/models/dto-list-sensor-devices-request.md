
# Dto List Sensor Devices Request

## Structure

`DtoListSensorDevicesRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountname` | `string \| undefined` | Optional | The numeric account name, which must include leading zeros |
| `filter` | [`DtoFilter \| undefined`](../../doc/models/dto-filter.md) | Optional | - |
| `resourceidentifier` | [`DtoDeviceResourceIdentifier \| undefined`](../../doc/models/dto-device-resource-identifier.md) | Optional | Device identifiers, one or more are required |

## Example

```ts
import { DtoListSensorDevicesRequest } from 'verizonlib';

const dtoListSensorDevicesRequest: DtoListSensorDevicesRequest = {
  accountname: '0000123456-00001',
  filter: {
    expand: '$expand0',
    limitnumber: 100,
    nopagination: false,
    page: '$page0',
    pagenumber: 64,
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

