
# Callback Registration Request

Specifies the callback service that is being subscribed to and the URL where the listening service is running.

## Structure

`CallbackRegistrationRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountName` | `string` | Required | The name of the billing account for which callback messages will be sent. Format: "##########-#####". |
| `serviceName` | `string` | Required | The name of the callback service, which identifies the type and format of messages that will be sent to the registered URL. |
| `endpoint` | `string` | Required | The URL for your web server. |
| `httpHeaders` | `unknown \| undefined` | Optional | Your HTTP headers. |

## Example

```ts
import { CallbackRegistrationRequest } from 'verizonlib';

const callbackRegistrationRequest: CallbackRegistrationRequest = {
  accountName: 'TestQAAccount',
  serviceName: 'Diagnostics',
  endpoint: 'https://yourwebsite.com',
  httpHeaders: { 'key1': 'val1', 'key2': 'val2' },
};
```

