
# Notify

## Structure

`Notify`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `alertType` | `string \| undefined` | Optional | - |
| `threshold` | [`NotifyThreshold[] \| undefined`](../../doc/models/containers/notify-threshold.md) | Optional | This is Array of a container for any-of cases. |

## Example

```ts
import { Notify } from 'verizonlib';

const notify: Notify = {
  alertType: 'individualpriceplan',
  threshold: [
    {
      carrierCode: 'carrierCode4',
      percentage: {
        percentage50: false,
        percentage75: false,
        percentage90: false,
        percentage100: false,
      },
    },
    {
      carrierCode: 'carrierCode4',
      percentage: {
        percentage50: false,
        percentage75: false,
        percentage90: false,
        percentage100: false,
      },
    },
    {
      carrierCode: 'carrierCode4',
      percentage: {
        percentage50: false,
        percentage75: false,
        percentage90: false,
        percentage100: false,
      },
    }
  ],
};
```

