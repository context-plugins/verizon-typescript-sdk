
# V2 Licenses Assigned Removed Result

License assignment or removal confirmation.

## Structure

`V2LicensesAssignedRemovedResult`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountName` | `string` | Required | Account name. |
| `licTotalCount` | `number` | Required | Total license count. |
| `licUsedCount` | `number` | Required | Assigned license count. |
| `deviceList` | [`V2DeviceStatus[]`](../../doc/models/v2-device-status.md) | Required | List of devices with id in IMEI. |

## Example

```ts
import { V2LicensesAssignedRemovedResult } from 'verizonlib';

const v2LicensesAssignedRemovedResult: V2LicensesAssignedRemovedResult = {
  accountName: '0242078689-00001',
  licTotalCount: 1000,
  licUsedCount: 502,
  deviceList: [
    {
      deviceId: '990003425730524',
      status: 'Success',
      resultReason: 'Success',
    },
    {
      deviceId: '990000473475967',
      status: 'Failure',
      resultReason: 'Device does not exist.',
    }
  ],
};
```

