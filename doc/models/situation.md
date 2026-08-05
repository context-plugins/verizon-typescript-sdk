
# Situation

This represents the situation container describing the event and the reliability of the detection source.

## Structure

`Situation`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `informationQuality` | `number` | Required | The quality or reliability level of the information provided by the ITS-S application of the originating ITS-S.<br><br>**Constraints**: `>= 0`, `<= 7` |
| `eventType` | [`EventType`](../../doc/models/event-type.md) | Required | The type of event including direct and sub cause. |

## Example

```ts
import { Situation } from 'verizonlib';

const situation: Situation = {
  informationQuality: 7,
  eventType: {
    ccAndScc: {
      trafficCondition1: 26,
    },
  },
};
```

