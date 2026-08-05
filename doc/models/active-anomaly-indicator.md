
# Active Anomaly Indicator

Whether the anomaly detection is active or not.

## Structure

`ActiveAnomalyIndicator`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `active` | `boolean \| undefined` | Optional | Indicates anomaly detection is active<br />True - Anomaly detection is active.<br />False - Anomaly detection is not active. |

## Example

```ts
import { ActiveAnomalyIndicator } from 'verizonlib';

const activeAnomalyIndicator: ActiveAnomalyIndicator = {
  active: true,
};
```

