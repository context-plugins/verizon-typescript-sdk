
# V3 License Assigned Removed Result

License assignment/removal response.

## Structure

`V3LicenseAssignedRemovedResult`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountName` | `string` | Required | Account name. |
| `licCount` | `number` | Required | Total license count. |
| `licUsedCount` | `number` | Required | Assigned license count. |
| `deviceList` | [`V3DeviceStatus[]`](../../doc/models/v3-device-status.md) | Required | List of devices with id in IMEI. |

## Example

```ts
import { V3LicenseAssignedRemovedResult } from 'verizonlib';

const v3LicenseAssignedRemovedResult: V3LicenseAssignedRemovedResult = {
  accountName: '0000123456-00001',
  licCount: 1000,
  licUsedCount: 2,
  deviceList: [
    {
      deviceId: '15-digit IMEI',
      status: 'UpgradePending',
      resultReason: 'Upgrade pending, the device upgrade is estimated to be scheduled for 06 Oct 22 18:05 UTC',
      updatedTime: '2022-08-05T21:05:27.129Z',
      recentAttemptTime: '2022-10-05T21:05:01.19Z',
      nextAttemptTime: '2022-10-06T18:35:00Z',
    }
  ],
};
```

