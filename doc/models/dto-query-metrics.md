
# Dto Query Metrics

## Structure

`DtoQueryMetrics`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `days` | `number \| undefined` | Optional | The number of days in a recent period to query |

## Example

```ts
import { DtoQueryMetrics } from 'verizonlib';

const dtoQueryMetrics: DtoQueryMetrics = {
  days: 30,
};
```

