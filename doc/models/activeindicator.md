
# Activeindicator

## Structure

`Activeindicator`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `active` | [`ActiveEnum \| undefined`](../../doc/models/active-enum.md) | Optional | A flag to indicate of the trigger is active, true, or not, false |

## Example

```ts
import { ActiveEnum, Activeindicator } from 'verizonlib';

const activeindicator: Activeindicator = {
  active: ActiveEnum.True,
};
```

