
# Data Percentage 75 Trigger Attribute

Trigger attribute for when data percentage is over 75% used.

## Structure

`DataPercentage75TriggerAttribute`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `key` | `string \| undefined` | Optional | Key data percentage 75. |
| `value` | `boolean \| undefined` | Optional | DataPercentage75<br />True - Trigger on Data percentage is over 75% used<br />False - Do not trigger when over 75% used. |

## Example

```ts
import { DataPercentage75TriggerAttribute } from 'verizonlib';

const dataPercentage75TriggerAttribute: DataPercentage75TriggerAttribute = {
  key: 'DataPercentage75',
  value: false,
};
```

