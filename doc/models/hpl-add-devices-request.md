
# Hpl Add Devices Request

Request to add the devices.

## Structure

`HplAddDevicesRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `state` | `string \| undefined` | Optional | The initial service state for the devices. The only valid state is "Preactive." |
| `devicesToAdd` | [`HplAccountDeviceList[] \| undefined`](../../doc/models/hpl-account-device-list.md) | Optional | The devices that you want to add. |
| `accountName` | `string \| undefined` | Optional | The numeric name of the account and must include leading zeroes. |
| `customFields` | [`HplCustomFields[] \| undefined`](../../doc/models/hpl-custom-fields.md) | Optional | The names and values for any custom fields that you want set for the devices as they are added to the account. |
| `groupName` | `string \| undefined` | Optional | The name of a device group to add the devices to. They are added to the default device group if you don't include this parameter. |
| `skuNumber` | `string \| undefined` | Optional | The Stock Keeping Unit (SKU) number of a 4G device type with an embedded SIM. |
| `smsrOid` | `string \| undefined` | Optional | The Subscription Manager Secure Router Object ID, used for remote SIM provisioning. SMSR securely routes the download and management of eSIM profiles. |
| `numberOfVirtualImei` | `number \| undefined` | Optional | numberOfVirtualImei. |
| `uploadType` | `string \| undefined` | Optional | uploadType. |

## Example

```ts
import { HplAddDevicesRequest } from 'verizonlib';

const hplAddDevicesRequest: HplAddDevicesRequest = {
  state: 'preactive',
  devicesToAdd: [
    {
      deviceIds: [
        {
          kind: 'imei',
          id: '15-digit IMEI',
        },
        {
          kind: 'iccid',
          id: '20-digit ICCID',
        }
      ],
    },
    {
      deviceIds: [
        {
          kind: 'imei',
          id: '15-digit IMEI',
        },
        {
          kind: 'iccid',
          id: '20-digit ICCID',
        }
      ],
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
  numberOfVirtualImei: 1,
};
```

