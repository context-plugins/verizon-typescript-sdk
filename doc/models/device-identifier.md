
# Device Identifier

Device Id details.

## Structure

`DeviceIdentifier`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `kind` | `string` | Required | Kind of device.<br><br>**Constraints**: *Minimum Length*: `3`, *Maximum Length*: `6`, *Pattern*: `^[A-Za-z]{3,6}$` |
| `id` | `string` | Required | Device Identity number.<br><br>**Constraints**: *Minimum Length*: `3`, *Maximum Length*: `32`, *Pattern*: `^[0-9]{3,32}$` |
| `mdn` | `string \| undefined` | Optional | Device MDN number.<br><br>**Constraints**: *Minimum Length*: `3`, *Maximum Length*: `10`, *Pattern*: `^[A-Za-z0-9]{3,10}$` |

## Example

```ts
import { DeviceIdentifier } from 'verizonlib';

const deviceIdentifier: DeviceIdentifier = {
  kind: 'iccid',
  id: '01234567899876543210',
  mdn: '0123456789',
};
```

