
# Connection Event

Network connection events for a device during a specified time period.

## Structure

`ConnectionEvent`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `connectionEventAttributes` | [`CustomFields[] \| undefined`](../../doc/models/custom-fields.md) | Optional | The attributes that describe the connection event. |
| `extendedAttributes` | [`CustomFields[] \| undefined`](../../doc/models/custom-fields.md) | Optional | Currently not used. |
| `occurredAt` | `string \| undefined` | Optional | The date and time when the connection event occured. |

## Example

```ts
import { ConnectionEvent } from 'verizonlib';

const connectionEvent: ConnectionEvent = {
  connectionEventAttributes: [
    {
      key: 'BytesUsed',
      value: '0',
    },
    {
      key: 'Event',
      value: 'Start',
    }
  ],
  extendedAttributes: [],
  occurredAt: '2015-12-17T14:12:36-05:00',
};
```

