
# Data Percentage 50 Trigger Attribute

Trigger attribute for when data percentage is over 50% used.

## Structure

`DataPercentage50TriggerAttribute`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `key` | `string \| undefined` | Optional | Key data percentage 50. |
| `value` | `boolean \| undefined` | Optional | DataPercentage50<br />True - Trigger on Data percentage is over 50% used<br />False - Do not trigger when over 50% used. |

## Example

```ts
import { DataPercentage50TriggerAttribute } from 'verizonlib';

const dataPercentage50TriggerAttribute: DataPercentage50TriggerAttribute = {
  key: 'DataPercentage50',
  value: false,
};
```

