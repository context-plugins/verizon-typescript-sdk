
# Callback Registration Result

## Structure

`CallbackRegistrationResult`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `account` | `string \| undefined` | Optional | The name of the account that registered the callback URL. |
| `name` | [`CallbackServiceNameEnum \| undefined`](../../doc/models/callback-service-name-enum.md) | Optional | The name of the callback service. |

## Example

```ts
import {
  CallbackRegistrationResult,
  CallbackServiceNameEnum,
} from 'verizonlib';

const callbackRegistrationResult: CallbackRegistrationResult = {
  account: '0212312345-00001',
  name: CallbackServiceNameEnum.Location,
};
```

