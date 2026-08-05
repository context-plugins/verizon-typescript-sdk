
# V2 List of Licenses to Remove Request

License cancellation candidate devices.

## Structure

`V2ListOfLicensesToRemoveRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `type` | `string \| undefined` | Optional | List creation option. |
| `count` | `number \| undefined` | Optional | The number of devices. |
| `deviceList` | `string[]` | Required | Device IMEI list. |

## Example

```ts
import { V2ListOfLicensesToRemoveRequest } from 'verizonlib';

const v2ListOfLicensesToRemoveRequest: V2ListOfLicensesToRemoveRequest = {
  deviceList: [
    '990003425730535',
    '990000473475989'
  ],
  type: 'append',
  count: 2,
};
```

