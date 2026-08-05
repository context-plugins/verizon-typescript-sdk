
# Data Percentage 100 Trigger Attribute

Trigger attribute for when data percentage is over 100% used.

## Structure

`DataPercentage100TriggerAttribute`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `key` | `string \| undefined` | Optional | Key data percentage 100. |
| `value` | `boolean \| undefined` | Optional | DataPercentage100<br />True - Trigger on Data percentage is over 100% used<br />False - Do not trigger when over 100% used. |

## Example

```ts
import { DataPercentage100TriggerAttribute } from 'verizonlib';

const dataPercentage100TriggerAttribute: DataPercentage100TriggerAttribute = {
  key: 'DataPercentage100',
  value: false,
};
```

