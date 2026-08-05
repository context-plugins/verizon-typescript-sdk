
# V1 Licenses Assigned Removed Result

License assignment or removal confirmation.

## Structure

`V1LicensesAssignedRemovedResult`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountName` | `string \| undefined` | Optional | Account identifier in "##########-#####". |
| `licCount` | `number \| undefined` | Optional | Total number of monthly licenses in an MRC subscription. |
| `licUsedCount` | `number \| undefined` | Optional | Number of licenses assigned to devices after the request completed. |
| `deviceList` | [`V1DeviceListItem[] \| undefined`](../../doc/models/v1-device-list-item.md) | Optional | A JSON object for each device that was in the request. |

## Example

```ts
import { V1LicensesAssignedRemovedResult } from 'verizonlib';

const v1LicensesAssignedRemovedResult: V1LicensesAssignedRemovedResult = {
  accountName: '0242078689-00001',
  licCount: 9000,
  licUsedCount: 1000,
  deviceList: [
    {
      deviceId: '900000000000001',
      status: 'LicenseAssignSuccess',
      reason: 'Success',
    },
    {
      deviceId: '900000000000999',
      status: 'LicenseAssignSuccess',
      reason: 'Success',
    }
  ],
};
```

