
# V2 List of Licenses to Remove

A list of license cancellation candidate devices.

## Structure

`V2ListOfLicensesToRemove`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `count` | `number` | Required | Cancellation candidate devices count. |
| `hasMoreData` | `boolean` | Required | Flag to indicat more devices. |
| `updateTime` | `string` | Required | Last update time. |
| `deviceList` | `string[]` | Required | Device IMEI list. |

## Example

```ts
import { V2ListOfLicensesToRemove } from 'verizonlib';

const v2ListOfLicensesToRemove: V2ListOfLicensesToRemove = {
  count: 6,
  hasMoreData: false,
  updateTime: '2018-03-22 00:06:00.069 +0000 UTC',
  deviceList: [
    '990003425730535',
    '990000473475989',
    '990005733420535',
    '990000347475989',
    '990007303425535',
    '990007590473489'
  ],
};
```

