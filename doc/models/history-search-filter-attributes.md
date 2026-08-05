
# History Search Filter Attributes

Streaming RF parameters for which you want to retrieve history data.

## Structure

`HistorySearchFilterAttributes`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `name` | [`AttributeIdentifierEnum \| undefined`](../../doc/models/attribute-identifier-enum.md) | Optional | Attribute identifier. |

## Example

```ts
import {
  AttributeIdentifierEnum,
  HistorySearchFilterAttributes,
} from 'verizonlib';

const historySearchFilterAttributes: HistorySearchFilterAttributes = {
  name: AttributeIdentifierEnum.LINKQUALITY,
};
```

