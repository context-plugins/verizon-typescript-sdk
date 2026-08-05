
# Device Group Filter

## Structure

`DeviceGroupFilter`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `deviceGroupName` | `string \| undefined` | Optional | - |
| `individualOrCombined` | `string \| undefined` | Optional | - |
| `accountName` | `string \| undefined` | Optional | The numeric name of the account and must include leading zeroes |

## Example

```ts
import { DeviceGroupFilter } from 'verizonlib';

const deviceGroupFilter: DeviceGroupFilter = {
  deviceGroupName: 'User defined group name',
  individualOrCombined: 'Combined',
  accountName: '0000123456-00001',
};
```

