
# Action Id

## Structure

`ActionId`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `originatingStationId` | `number` | Required | Unique ID for originating station. |
| `sequenceNumber` | `number` | Required | Counter used to differenciate multiple DENMs from same station. |

## Example

```ts
import { ActionId } from 'verizonlib';

const actionId: ActionId = {
  originatingStationId: 28,
  sequenceNumber: 42,
};
```

