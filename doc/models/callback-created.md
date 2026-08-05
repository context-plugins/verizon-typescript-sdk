
# Callback Created

## Structure

`CallbackCreated`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountName` | `string` | Required | The numeric name of the account and must include leading zeroes. |
| `name` | `string` | Required | The name of the callback service, which identifies the type and format of messages that will be sent to the registered URL. |
| `url` | `string \| undefined` | Optional | The address of the callback listening service where the ThingSpace Platform will send callback messages for the service type. |

## Example

```ts
import { CallbackCreated } from 'verizonlib';

const callbackCreated: CallbackCreated = {
  accountName: '0000123456-00001',
  name: 'BullseyeReporting',
  url: 'https://tsustgtests.mocklab.io/notifications/bullseye',
};
```

