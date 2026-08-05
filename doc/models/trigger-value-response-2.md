
# Trigger Value Response 2

## Structure

`TriggerValueResponse2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `triggers` | [`TriggervalueChunk2[] \| undefined`](../../doc/models/containers/triggervalue-chunk-2.md) | Optional | - |

## Example

```ts
import { TriggerValueResponse2 } from 'verizonlib';

const triggerValueResponse2: TriggerValueResponse2 = {
  triggers: [
    {
      triggerId: 'triggerId8',
      triggerName: 'triggerName6',
      accountName: 'accountName2',
      organizationName: 'organizationName0',
      triggerCategory: 'triggerCategory0',
    },
    {
      triggerId: 'triggerId8',
      triggerName: 'triggerName6',
      accountName: 'accountName2',
      organizationName: 'organizationName0',
      triggerCategory: 'triggerCategory0',
    }
  ],
};
```

