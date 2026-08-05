
# Trigger Value Response

## Structure

`TriggerValueResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `triggers` | [`TriggervalueChunk[] \| undefined`](../../doc/models/containers/triggervalue-chunk.md) | Optional | - |

## Example

```ts
import { TriggerValueResponse } from 'verizonlib';

const triggerValueResponse: TriggerValueResponse = {
  triggers: [
    {
      triggerId: 'triggerId4',
      triggerName: 'triggerName2',
      accountName: 'accountName8',
      organizationName: 'organizationName6',
      triggerCategory: 'triggerCategory6',
    },
    {
      triggerId: 'triggerId4',
      triggerName: 'triggerName2',
      accountName: 'accountName8',
      organizationName: 'organizationName6',
      triggerCategory: 'triggerCategory6',
    }
  ],
};
```

