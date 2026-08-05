
# Sms Messages Response

## Structure

`SmsMessagesResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `messages` | [`SmsMessagesResponseMessages[] \| undefined`](../../doc/models/containers/sms-messages-response-messages.md) | Optional | This is Array of a container for any-of cases.<br><br>**Constraints**: *Maximum Items*: `5` |
| `hasMoreData` | `boolean \| undefined` | Optional | - |

## Example

```ts
import { SmsMessagesResponse } from 'verizonlib';

const smsMessagesResponse: SmsMessagesResponse = {
  messages: [
    {
      deviceIds: [
        {
          kind: 'kind8',
          id: 'id0',
        }
      ],
      message: 'message4',
      timestamp: '2016-03-13T12:52:32.123Z',
    }
  ],
  hasMoreData: false,
};
```

