
# Carrier Actions Request

Request for a carrier action.

## Structure

`CarrierActionsRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountName` | `string \| undefined` | Optional | The name of a billing account. |
| `customFields` | [`CustomFields[] \| undefined`](../../doc/models/custom-fields.md) | Optional | Custom field names and values, if you want to only include devices that have matching values. |
| `devices` | [`AccountDeviceList[] \| undefined`](../../doc/models/account-device-list.md) | Optional | The devices for which you want to restore service, specified by device identifier. |
| `withBilling` | `boolean \| undefined` | Optional | set to "true" to suspend with billing, set to "false" to suspend without billing |
| `groupName` | `string \| undefined` | Optional | The name of a device group, if you want to restore service for all devices in that group. |
| `servicePlan` | `string \| undefined` | Optional | The name of a service plan, if you want to only include devices that have that service plan. |

## Example

```ts
import { CarrierActionsRequest } from 'verizonlib';

const carrierActionsRequest: CarrierActionsRequest = {
  accountName: 'accountName0',
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
    {
      deviceIds: [
        {
          id: '89148000000800139708',
          kind: 'iccid',
        }
      ],
      ipaddress: 'ipAddress4',
    }
  ],
  withBilling: false,
  groupName: 'groupName4',
};
```

