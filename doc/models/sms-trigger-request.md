
# SMS Trigger Request

## Structure

`SMSTriggerRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `comparator` | `string \| undefined` | Optional | **Constraints**: *Minimum Length*: `3`, *Maximum Length*: `32`, *Pattern*: `^[A-Za-z0-9]{3,32}$` |
| `smsType` | `string \| undefined` | Optional | **Constraints**: *Minimum Length*: `3`, *Maximum Length*: `32`, *Pattern*: `^[A-Za-z0-9]{3,32}$` |
| `threshold` | `number \| undefined` | Optional | **Constraints**: `>= 0`, `<= 100` |

## Example

```ts
import { SMSTriggerRequest } from 'verizonlib';

const sMSTriggerRequest: SMSTriggerRequest = {
  comparator: 'comparator6',
  smsType: 'smsType0',
  threshold: 100,
};
```

