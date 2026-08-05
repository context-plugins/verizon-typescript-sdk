
# Account Group Share Action

## Structure

`AccountGroupShareAction`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `notify` | [`Notify \| undefined`](../../doc/models/notify.md) | Optional | - |

## Example

```ts
import { AccountGroupShareAction } from 'verizonlib';

const accountGroupShareAction: AccountGroupShareAction = {
  notify: {
    alertType: 'alertType8',
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
  },
};
```

