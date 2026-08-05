
# V1 List of Licenses to Remove Result

List of licenses assigned.

## Structure

`V1ListOfLicensesToRemoveResult`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `count` | `number \| undefined` | Optional | The total number of devices on the cancellation candidate list. |
| `deviceList` | `string[] \| undefined` | Optional | The IMEIs of the devices. |

## Example

```ts
import { V1ListOfLicensesToRemoveResult } from 'verizonlib';

const v1ListOfLicensesToRemoveResult: V1ListOfLicensesToRemoveResult = {
  count: 2,
  deviceList: [
    '900000000000001',
    '900000000000999'
  ],
};
```

