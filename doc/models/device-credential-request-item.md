
# Device Credential Request Item

## Structure

`DeviceCredentialRequestItem`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `imei` | `string` | Required | 15-digit alphanumeric identifier<br><br>**Constraints**: *Pattern*: `^[A-Za-z0-9]{15}$` |

## Example

```ts
import { DeviceCredentialRequestItem } from 'verizonlib';

const deviceCredentialRequestItem: DeviceCredentialRequestItem = {
  imei: '221000008775573',
};
```

