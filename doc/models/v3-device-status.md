
# V3 Device Status

Device status.

## Structure

`V3DeviceStatus`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `deviceId` | `string` | Required | Device IMEI. |
| `status` | `string` | Required | Success or failure. |
| `resultReason` | `string \| undefined` | Optional | Result reason. |
| `updatedTime` | `string \| undefined` | Optional | Updated Time. |
| `recentAttemptTime` | `string \| undefined` | Optional | The most recent attempt time. |
| `nextAttemptTime` | `string \| undefined` | Optional | Next attempt time. |

## Example

```ts
import { V3DeviceStatus } from 'verizonlib';

const v3DeviceStatus: V3DeviceStatus = {
  deviceId: '15-digit IMEI',
  status: 'UpgradePending',
  resultReason: 'Upgrade pending, the device upgrade is estimated to be scheduled for 06 Oct 22 18:05 UTC',
  updatedTime: '2022-08-05T21:05:27.129Z',
  recentAttemptTime: '2022-10-05T21:05:01.19Z',
  nextAttemptTime: '2022-10-06T18:35:00Z',
};
```

