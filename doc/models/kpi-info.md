
# KPI Info

KPI Info Object

## Structure

`KPIInfo`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `name` | `string \| undefined` | Optional | - |
| `value` | `string \| undefined` | Optional | - |
| `nodeName` | `string \| undefined` | Optional | - |
| `nodeType` | `string \| undefined` | Optional | - |
| `description` | `string \| undefined` | Optional | - |
| `unit` | `string \| undefined` | Optional | - |
| `category` | `string \| undefined` | Optional | - |
| `timeOfLastUpdate` | `string \| undefined` | Optional | - |

## Example

```ts
import { KPIInfo } from 'verizonlib';

const kPIInfo: KPIInfo = {
  name: 'DOWNLINK_THROUGHPUT',
  value: '23.2',
  nodeName: '132924_ENB_VZ_EULESS_OLTE_RD-01',
  nodeType: 'BASEBAND',
  description: 'Downlink throughput (4G)',
  unit: 'Mbps',
  category: 'Network Performance Radio',
  timeOfLastUpdate: '2022-12-07T08:39:59.228Z',
};
```

