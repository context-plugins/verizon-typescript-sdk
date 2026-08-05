
# V1 List of Licenses to Remove

List of cancellation candidate devices.

## Structure

`V1ListOfLicensesToRemove`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `count` | `number \| undefined` | Optional | The total number of devices on the list. |
| `hasMoreData` | `boolean \| undefined` | Optional | True if there are more devices to retrieve. |
| `updateTime` | `string \| undefined` | Optional | The date and time that the list was last updated. |
| `deviceList` | `string[] \| undefined` | Optional | The IMEIs of the devices. |

## Example

```ts
import { V1ListOfLicensesToRemove } from 'verizonlib';

const v1ListOfLicensesToRemove: V1ListOfLicensesToRemove = {
  count: 6,
  hasMoreData: false,
  updateTime: '2018-03-22T12:06:06.000Z',
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

