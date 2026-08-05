
# Flow Info

## Structure

`FlowInfo`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `flowServer` | `string \| undefined` | Optional | - |
| `flowDevice` | `string \| undefined` | Optional | - |
| `flowDirection` | `string \| undefined` | Optional | - |
| `flowProtocol` | `string \| undefined` | Optional | - |
| `qciOption` | `string \| undefined` | Optional | - |

## Example

```ts
import { FlowInfo } from 'verizonlib';

const flowInfo: FlowInfo = {
  flowServer: '[IPv6 address]:port',
  flowDevice: '[IPv6 address]:port',
  flowDirection: 'UPLINK',
  flowProtocol: 'UDP',
  qciOption: 'Premium',
};
```

