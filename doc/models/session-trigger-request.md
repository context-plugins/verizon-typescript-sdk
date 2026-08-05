
# Session Trigger Request

## Structure

`SessionTriggerRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `comparator` | `string \| undefined` | Optional | **Constraints**: *Minimum Length*: `3`, *Maximum Length*: `32`, *Pattern*: `^[A-Za-z0-9]{3,32}$` |
| `threshold` | `number \| undefined` | Optional | **Constraints**: `>= 0`, `<= 100` |

## Example

```ts
import { SessionTriggerRequest } from 'verizonlib';

const sessionTriggerRequest: SessionTriggerRequest = {
  comparator: 'comparator6',
  threshold: 100,
};
```

