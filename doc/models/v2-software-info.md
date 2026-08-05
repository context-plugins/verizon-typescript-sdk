
# V2 Software Info

Software information.

## Structure

`V2SoftwareInfo`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `name` | `string` | Required | Software name. |
| `version` | `string` | Required | Software version. |
| `upgradeTime` | `string` | Required | Upgrade time. |

## Example

```ts
import { V2SoftwareInfo } from 'verizonlib';

const v2SoftwareInfo: V2SoftwareInfo = {
  name: 'FOTA_Verizon_Model-A_02To03_HF',
  version: '3',
  upgradeTime: '2020-09-08T19:00:51.541Z',
};
```

