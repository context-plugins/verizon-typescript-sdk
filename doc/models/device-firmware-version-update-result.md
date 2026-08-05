
# Device Firmware Version Update Result

Device firmware version update response.

## Structure

`DeviceFirmwareVersionUpdateResult`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountName` | `string` | Required | Account identifier. |
| `requestId` | `string` | Required | Request identifier. |

## Example

```ts
import { DeviceFirmwareVersionUpdateResult } from 'verizonlib';

const deviceFirmwareVersionUpdateResult: DeviceFirmwareVersionUpdateResult = {
  accountName: 'accountName8',
  requestId: 'requestId6',
};
```

