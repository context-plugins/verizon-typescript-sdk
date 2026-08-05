
# Get Trigger Response List

## Structure

`GetTriggerResponseList`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `triggers` | [`GetTriggerResponse[] \| undefined`](../../doc/models/get-trigger-response.md) | Optional | **Constraints**: *Maximum Items*: `3` |

## Example

```ts
import { GetTriggerResponseList } from 'verizonlib';

const getTriggerResponseList: GetTriggerResponseList = {
  triggers: [
    {
      accountName: 'accountName4',
      comparator: 'comparator2',
      createdAt: '2016-03-13T12:52:32.123Z',
      groupName: 'groupName0',
      modifiedAt: '2016-03-13T12:52:32.123Z',
    }
  ],
};
```

