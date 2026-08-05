
# Account Group Share Condition

## Structure

`AccountGroupShareCondition`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `action` | [`ConditionActionEnum \| undefined`](../../doc/models/condition-action-enum.md) | Optional | The action taken when trigger conditions are met |

## Example

```ts
import { AccountGroupShareCondition, ConditionActionEnum } from 'verizonlib';

const accountGroupShareCondition: AccountGroupShareCondition = {
  action: ConditionActionEnum.Notify,
};
```

