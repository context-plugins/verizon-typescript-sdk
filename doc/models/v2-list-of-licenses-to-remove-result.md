
# V2 List of Licenses to Remove Result

List of created license cancellation devices.

## Structure

`V2ListOfLicensesToRemoveResult`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `count` | `number` | Required | The number of devices. |
| `deviceList` | `string[]` | Required | Device IMEI list. |

## Example

```ts
import { V2ListOfLicensesToRemoveResult } from 'verizonlib';

const v2ListOfLicensesToRemoveResult: V2ListOfLicensesToRemoveResult = {
  count: 2,
  deviceList: [
    '990003425730535',
    '990000473475989'
  ],
};
```

