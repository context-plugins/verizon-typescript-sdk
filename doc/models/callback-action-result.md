
# Callback Action Result

Response to a callback action.

## Structure

`CallbackActionResult`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountName` | `string \| undefined` | Optional | The name of the billing account. |
| `serviceName` | `string \| undefined` | Optional | The name of the callback service that was registered/deregistered. |

## Example

```ts
import { CallbackActionResult } from 'verizonlib';

const callbackActionResult: CallbackActionResult = {
  accountName: '122333444-00002',
  serviceName: 'CarrierService',
};
```

