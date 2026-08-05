
# Get Device List with Profiles Request

## Structure

`GetDeviceListWithProfilesRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountName` | `string` | Required | **Constraints**: *Minimum Length*: `3`, *Maximum Length*: `32`, *Pattern*: `^[A-Za-z0-9\-]{3,32}$` |
| `provisioningStatusFilter` | `string \| undefined` | Optional | **Constraints**: *Minimum Length*: `3`, *Maximum Length*: `32`, *Pattern*: `^[A-Za-z0-9]{3,32}$` |
| `profileStatusFilter` | `string \| undefined` | Optional | **Constraints**: *Minimum Length*: `3`, *Maximum Length*: `32`, *Pattern*: `^[A-Za-z0-9]{3,32}$` |
| `carrierNameFilter` | `string \| undefined` | Optional | **Constraints**: *Minimum Length*: `3`, *Maximum Length*: `32`, *Pattern*: `^[A-Za-z0-9]{3,32}$` |
| `deviceFilter` | [`GIODeviceId[] \| undefined`](../../doc/models/gio-device-id.md) | Optional | **Constraints**: *Maximum Items*: `50` |

## Example

```ts
import { GetDeviceListWithProfilesRequest } from 'verizonlib';

const getDeviceListWithProfilesRequest: GetDeviceListWithProfilesRequest = {
  accountName: '0000123456-00001',
  provisioningStatusFilter: 'ACTIVE',
  profileStatusFilter: 'UNKNOWN',
  carrierNameFilter: 'carrierNameFilter4',
  deviceFilter: [
    {
      kind: 'kind2',
      id: 'id4',
    },
    {
      kind: 'kind2',
      id: 'id4',
    },
    {
      kind: 'kind2',
      id: 'id4',
    }
  ],
};
```

