
# The I Dresourceand Device ID

## Structure

`TheIDresourceandDeviceID`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string \| undefined` | Optional | UUID of the user record, assigned at creation |
| `deviceid` | `string \| undefined` | Optional | This is a UUID value of the device created when the device is onboarded |

## Example

```ts
import { TheIDresourceandDeviceID } from 'verizonlib';

const theIDresourceandDeviceID: TheIDresourceandDeviceID = {
  id: 'id6',
  deviceid: 'The UUID of the device',
};
```

