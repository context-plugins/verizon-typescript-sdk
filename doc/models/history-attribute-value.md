
# History Attribute Value

Streaming RF parameter for which you want to retrieve history data.

## Structure

`HistoryAttributeValue`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `name` | [`AttributeIdentifierEnum \| undefined`](../../doc/models/attribute-identifier-enum.md) | Optional | Attribute identifier. |
| `value` | `string \| undefined` | Optional | Attribute value. |
| `createdOn` | `string \| undefined` | Optional | Date and time the request was created. |

## Example

```ts
import { AttributeIdentifierEnum, HistoryAttributeValue } from 'verizonlib';

const historyAttributeValue: HistoryAttributeValue = {
  name: AttributeIdentifierEnum.LINKQUALITY,
  value: '47',
  createdOn: '2022-02-10T16:02:21.406Z',
};
```

