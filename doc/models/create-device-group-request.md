
# Create Device Group Request

Create request for a new device group and optionally add devices to the group.

## Structure

`CreateDeviceGroupRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountName` | `string` | Required | The Verizon billing account that the device group will belong to. An account name is usually numeric, and must include any leading zeros. |
| `groupDescription` | `string` | Required | A description for the device group. |
| `groupName` | `string` | Required | The name for the new device group. This name must be unique within the specified account. |
| `devicesToAdd` | [`DeviceId[] \| undefined`](../../doc/models/device-id.md) | Optional | Zero or more devices to add to the device group. You can use POST /devices/actions/list to get a list of all devices in the account. |

## Example

```ts
import { CreateDeviceGroupRequest } from 'verizonlib';

const createDeviceGroupRequest: CreateDeviceGroupRequest = {
  accountName: '10001234-0001',
  groupDescription: 'Nevada tank level monitors.',
  groupName: 'NV tanks',
  devicesToAdd: [
    {
      id: '990003420535537',
      kind: 'imei',
    }
  ],
};
```

