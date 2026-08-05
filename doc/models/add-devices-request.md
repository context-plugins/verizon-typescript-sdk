
# Add Devices Request

Request to add the devices.

## Structure

`AddDevicesRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `state` | `string` | Required | The initial service state for the devices. The only valid state is “Pre-active.” |
| `devicesToAdd` | [`AccountDeviceList[]`](../../doc/models/account-device-list.md) | Required | The devices that you want to add. |
| `accountName` | `string \| undefined` | Optional | The billing account to which the devices are added. |
| `customFields` | [`CustomFields[] \| undefined`](../../doc/models/custom-fields.md) | Optional | The names and values for any custom fields that you want set for the devices as they are added to the account. |
| `groupName` | `string \| undefined` | Optional | The name of a device group to add the devices to. They are added to the default device group if you don't include this parameter. |
| `skuNumber` | `string \| undefined` | Optional | The Stock Keeping Unit (SKU) number of a 4G device type with an embedded SIM. |
| `smsrOid` | `string \| undefined` | Optional | **Constraints**: *Minimum Length*: `3`, *Maximum Length*: `32`, *Pattern*: `^[A-Za-z0-9]{3,32}$` |

## Example

```ts
import { AddDevicesRequest } from 'verizonlib';

const addDevicesRequest: AddDevicesRequest = {
  state: 'Pre-active',
  devicesToAdd: [
    {
      deviceIds: [
        {
          id: '15-digit IMEI',
          kind: 'imei',
        },
        {
          id: '20-digit ICCID',
          kind: 'iccid',
        }
      ],
      ipaddress: 'ipAddress2',
    },
    {
      deviceIds: [
        {
          id: '15-digit IMEI',
          kind: 'imei',
        },
        {
          id: '20-digit ICCID',
          kind: 'iccid',
        }
      ],
      ipaddress: 'ipAddress2',
    }
  ],
  accountName: '0000123456-00001',
  customFields: [
    {
      key: 'CustomField2',
      value: 'SuperVend',
    }
  ],
  groupName: 'West Region',
  skuNumber: 'skuNumber4',
  smsrOid: 'smsrOid8',
};
```

