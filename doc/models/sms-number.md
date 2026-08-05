
# SMS Number

Notification SMS details.

## Structure

`SMSNumber`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `carrier` | `string \| undefined` | Optional | - |
| `number` | `string \| undefined` | Optional | - |

## Example

```ts
import { SMSNumber } from 'verizonlib';

const sMSNumber: SMSNumber = {
  carrier: 'US Cellular',
  number: '9299280711',
};
```

