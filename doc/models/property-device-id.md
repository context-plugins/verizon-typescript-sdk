
# Property Device Id

## Structure

`PropertyDeviceId`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string \| undefined` | Optional | - |
| `kind` | `string \| undefined` | Optional | The type of the device identifier. Valid types of identifiers are:ESN (decimal),EID,ICCID (up to 20 digits),IMEI (up to 16 digits),MDN,MEID (hexadecimal),MSISDN. |

## Example

```ts
import { PropertyDeviceId } from 'verizonlib';

const propertyDeviceId: PropertyDeviceId = {
  id: 'id0',
  kind: 'imei',
};
```

