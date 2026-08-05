
# Filtercriteria

## Structure

`Filtercriteria`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `filterCriteria` | [`ReadySimServicePlan[] \| undefined`](../../doc/models/ready-sim-service-plan.md) | Optional | - |

## Example

```ts
import { Filtercriteria } from 'verizonlib';

const filtercriteria: Filtercriteria = {
  filterCriteria: [
    {
      servicePlan: 'servicePlan4',
    }
  ],
};
```

