
# Change PWN Device State Response

Response to change PWN device state

## Structure

`ChangePWNDeviceStateResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestId` | `string \| undefined` | Optional | A unique string that associates the request with the results that are sent via a callback service. |

## Example

```ts
import { ChangePWNDeviceStateResponse } from 'verizonlib';

const changePWNDeviceStateResponse: ChangePWNDeviceStateResponse = {
  requestId: '24da9f9a-d110-4a54-86b4-93fb76aab83c',
};
```

