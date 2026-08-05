
# Event Type

The type of event including direct and sub cause.

## Structure

`EventType`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `ccAndScc` | [`CauseCodeChoice \| undefined`](../../doc/models/containers/cause-code-choice.md) | Optional | The main cause of a detected event. Each entry is of a different type and represents the sub cause code. |

## Example

```ts
import { EventType } from 'verizonlib';

const eventType: EventType = {
  ccAndScc: {
    trafficCondition1: 26,
  },
};
```

