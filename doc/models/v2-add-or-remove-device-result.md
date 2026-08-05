
# V2 Add or Remove Device Result

Add or remove devices from the existing software upgrade information.

## Structure

`V2AddOrRemoveDeviceResult`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountName` | `string` | Required | Account identifier. |
| `campaignId` | `string` | Required | Campaign identifier. |
| `requestId` | `string` | Required | Request identifier. |

## Example

```ts
import { V2AddOrRemoveDeviceResult } from 'verizonlib';

const v2AddOrRemoveDeviceResult: V2AddOrRemoveDeviceResult = {
  accountName: '0402196254-00001',
  campaignId: '60b5d639-ccdc-4db8-8824-069bd94c95bf',
  requestId: 'requestId0',
};
```

