
# Service Plan Responseforplanner

## Structure

`ServicePlanResponseforplanner`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `carrierServicePlanCode` | `string \| undefined` | Optional | The name of the service plan code |
| `code` | `string \| undefined` | Optional | The actiavtion code value. |
| `extendedAttributes` | [`KvPairforplanner[] \| undefined`](../../doc/models/kv-pairforplanner.md) | Optional | key/value pairs assigned by the user for filtering.<br><br>**Constraints**: *Maximum Items*: `5` |
| `name` | `string \| undefined` | Optional | The carrier name of the active profile. |
| `sizeKb` | `number \| undefined` | Optional | size in Kilobytes of the service plan |

## Example

```ts
import { ServicePlanResponseforplanner } from 'verizonlib';

const servicePlanResponseforplanner: ServicePlanResponseforplanner = {
  carrierServicePlanCode: 'carrierServicePlanCode8',
  code: 'code8',
  extendedAttributes: [
    {
      key: 'key8',
      value: 'value0',
    }
  ],
  name: 'name0',
  sizeKb: 68,
};
```

