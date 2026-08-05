
# Data Percentage 90 Trigger Attribute

Trigger attribute for when data percentage is over 90% used.

## Structure

`DataPercentage90TriggerAttribute`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `key` | `string \| undefined` | Optional | Key data percentage 90. |
| `value` | `boolean \| undefined` | Optional | DataPercentage90<br />True - Trigger on Data percentage is over 90% used<br />False - Do not trigger when over 90% used. |

## Example

```ts
import { DataPercentage90TriggerAttribute } from 'verizonlib';

const dataPercentage90TriggerAttribute: DataPercentage90TriggerAttribute = {
  key: 'DataPercentage90',
  value: false,
};
```

