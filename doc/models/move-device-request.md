
# Move Device Request

Request to move active devices from one billing account to another within a customer profile.

## Structure

`MoveDeviceRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountName` | `string` | Required | The name of the billing account that you want to move the devices to. |
| `filter` | [`DeviceFilter \| undefined`](../../doc/models/device-filter.md) | Optional | Specify the kind of the device identifier, the type of match, and the string that you want to match. |
| `customFields` | [`CustomFields[] \| undefined`](../../doc/models/custom-fields.md) | Optional | Custom field names and values, if you want to only include devices that have matching values. |
| `devices` | [`AccountDeviceList[] \| undefined`](../../doc/models/account-device-list.md) | Optional | Up to 10,000 devices that you want to move to a different account, specified by device identifier. |
| `groupName` | `string \| undefined` | Optional | The name of a device group, to only include devices in that group. |
| `carrierIpPoolName` | `string \| undefined` | Optional | The pool from which device IP addresses will be derived in the new account. If you do not include this element, the default pool will be used. |
| `servicePlan` | `string \| undefined` | Optional | The service plan code that you want to assign to the devices in the new account. If you do not include this element, ThingSpace will attempt to use the current service plan, which will result in a error if the new account does not have that service plan. |

## Example

```ts
import { MoveDeviceRequest } from 'verizonlib';

const moveDeviceRequest: MoveDeviceRequest = {
  accountName: '0212345678-00001',
  filter: {
    account: 'account4',
    groupName: 'Short-Haul Trucks',
    servicePlan: 'servicePlan6',
    customFields: [
      {
        key: 'CustomField1',
        value: 'East Region Trucks',
      }
    ],
  },
  customFields: [
    {},
    {
      key: '',
    },
    {
      key: '',
    }
  ],
  devices: [
    {},
    {
      deviceIds: [],
    }
  ],
  groupName: 'groupName4',
  carrierIpPoolName: 'carrierIpPoolName4',
  servicePlan: 'M2M5GB',
};
```

