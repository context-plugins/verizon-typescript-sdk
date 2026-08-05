
# Device Diagnostics Callback

Callback information of an existing diagnostics subscription.

## Structure

`DeviceDiagnosticsCallback`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountName` | `string` | Required | The name of the billing account for which callback messages will be sent. Format: "##########-#####". |
| `serviceName` | `string` | Required | The name of the callback service, which identifies the type and format of messages that will be sent to the registered URL. |
| `endpoint` | `string` | Required | The URL for your web server. |
| `createdOn` | `string` | Required | The date and time of when this request was created. |
| `httpHeaders` | `unknown \| undefined` | Optional | Your HTTP headers. |

## Example

```ts
import { DeviceDiagnosticsCallback } from 'verizonlib';

const deviceDiagnosticsCallback: DeviceDiagnosticsCallback = {
  accountName: 'TestQAAccount',
  serviceName: 'Diagnostics',
  endpoint: 'https://yourwebsite.com',
  createdOn: '2019-09-07T23:57:53.292Z',
  httpHeaders: { 'key1': 'val1', 'key2': 'val2' },
};
```

