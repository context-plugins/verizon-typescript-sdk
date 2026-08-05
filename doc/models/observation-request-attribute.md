
# Observation Request Attribute

Streaming RF parameter that you want to observe.

## Structure

`ObservationRequestAttribute`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `name` | [`AttributeIdentifierEnum \| undefined`](../../doc/models/attribute-identifier-enum.md) | Optional | Attribute identifier. |

## Example

```ts
import {
  AttributeIdentifierEnum,
  ObservationRequestAttribute,
} from 'verizonlib';

const observationRequestAttribute: ObservationRequestAttribute = {
  name: AttributeIdentifierEnum.RADIOSIGNALSTRENGTH,
};
```

