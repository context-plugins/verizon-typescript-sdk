
# Trigger Attributes Options

## Structure

`TriggerAttributesOptions`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `key` | `string \| undefined` | Optional | If present, the NotificationGroupName will be listed here. |
| `value` | `boolean \| undefined` | Optional | DataPercentage50<br />True - Trigger on Data percentage is over 50% used<br />False - Do not trigger when over 50% used. |

## Example

```ts
import { TriggerAttributesOptions } from 'verizonlib';

const triggerAttributesOptions: TriggerAttributesOptions = {
  key: 'DataPercentage50',
  value: false,
};
```

