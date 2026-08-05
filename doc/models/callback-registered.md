
# Callback Registered

Callback listener is Registered.

## Structure

`CallbackRegistered`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountName` | `string` | Required | The numeric name of the account and must include leading zeroes. |
| `name` | `string` | Required | The name of the callback service, which identifies the type and format of messages that will be sent to the registered URL. |

## Example

```ts
import { CallbackRegistered } from 'verizonlib';

const callbackRegistered: CallbackRegistered = {
  accountName: '0000123456-00001',
  name: 'BullseyeReporting',
};
```

