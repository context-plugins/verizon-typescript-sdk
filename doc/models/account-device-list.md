
# Account Device List

A list of deviceId objects to use when requesting information from multiple devices.

## Structure

`AccountDeviceList`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `deviceIds` | [`DeviceId[]`](../../doc/models/device-id.md) | Required | All identifiers for the device. |
| `ipaddress` | `string \| undefined` | Optional | **Constraints**: *Minimum Length*: `3`, *Maximum Length*: `32`, *Pattern*: `^[0-9].[0-9].[0-9].[0-9]{3,32}$` |

## Example

```ts
import { AccountDeviceList } from 'verizonlib';

const accountDeviceList: AccountDeviceList = {
  deviceIds: [
    {
      id: '990013907835573',
      kind: 'imei',
    },
    {
      id: '89141390780800784259',
      kind: 'iccid',
    }
  ],
  ipaddress: 'ipAddress0',
};
```

