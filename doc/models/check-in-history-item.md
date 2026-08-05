
# Check In History Item

Check-in history for a device.

## Structure

`CheckInHistoryItem`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `deviceId` | `string` | Required | Device IMEI. |
| `clientType` | `string` | Required | Type of client. |
| `result` | `string` | Required | - |
| `failureType` | `string` | Required | - |
| `timeCompleted` | `string` | Required | - |

## Example

```ts
import { CheckInHistoryItem } from 'verizonlib';

const checkInHistoryItem: CheckInHistoryItem = {
  deviceId: '990013907835573',
  clientType: 'clientType0',
  result: 'result6',
  failureType: 'failureType6',
  timeCompleted: '2020-10-22T19:35:07.753Z',
};
```

