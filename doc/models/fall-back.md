
# Fall Back

## Structure

`FallBack`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `devices` | [`FallBackDevices[] \| undefined`](../../doc/models/containers/fall-back-devices.md) | Optional | This is 2d Array of a container for any-of cases.<br><br>**Constraints**: *Maximum Items*: `100` |
| `accountName` | `string \| undefined` | Optional | The numeric name of the account, in the format "0000123456-00001". Leading zeros must be included.<br><br>**Constraints**: *Minimum Length*: `3`, *Maximum Length*: `32`, *Pattern*: `^[0-9]{3,32}$` |

## Example

```ts
import { FallBack } from 'verizonlib';

const fallBack: FallBack = {
  devices: [
    null,
    null
  ],
  accountName: 'accountName4',
};
```

