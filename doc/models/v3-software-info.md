
# V3 Software Info

Software information.

## Structure

`V3SoftwareInfo`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `name` | `string` | Required | Software name. |
| `version` | `string` | Required | Software version. |
| `upgradeTime` | `string` | Required | Upgrade time. |

## Example

```ts
import { V3SoftwareInfo } from 'verizonlib';

const v3SoftwareInfo: V3SoftwareInfo = {
  name: 'VZ_MDM_IOT',
  version: '0.14',
  upgradeTime: '2012-04-23T18:25:43.511Z',
};
```

