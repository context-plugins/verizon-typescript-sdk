
# ESIM Global Device List

## Structure

`ESIMGlobalDeviceList`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountName` | `string \| undefined` | Optional | The numeric name of the account. |
| `provisioningStatusFilter` | [`ProvisioningStatusFilterEnum \| undefined`](../../doc/models/provisioning-status-filter-enum.md) | Optional | The last status of the device as a list filter. |
| `profileStatusFilter` | [`ProfileStatusFilterEnum \| undefined`](../../doc/models/profile-status-filter-enum.md) | Optional | The last status of the device's profile as a filter. |
| `carrierNameFilter` | `string \| undefined` | Optional | The cellular service provider. |
| `deviceFilter` | [`ESIMGlobalDeviceListDeviceFilter[] \| undefined`](../../doc/models/containers/esim-global-device-list-device-filter.md) | Optional | This is Array of a container for any-of cases. |

## Example

```ts
import {
  ESIMGlobalDeviceList,
  ProfileStatusFilterEnum,
  ProvisioningStatusFilterEnum,
} from 'verizonlib';

const eSIMGlobalDeviceList: ESIMGlobalDeviceList = {
  accountName: '0000123456-00001',
  provisioningStatusFilter: ProvisioningStatusFilterEnum.SUSPEND,
  profileStatusFilter: ProfileStatusFilterEnum.DELETE,
  carrierNameFilter: 'VerizonWireless',
  deviceFilter: [
    {
      id: 'id4',
      kind: 'kind2',
    }
  ],
};
```

