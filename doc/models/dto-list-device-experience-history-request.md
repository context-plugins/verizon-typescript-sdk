
# Dto List Device Experience History Request

## Structure

`DtoListDeviceExperienceHistoryRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountname` | `string \| undefined` | Optional | The numeric account name, which must include leading zeros |
| `filter` | [`DtoFilter \| undefined`](../../doc/models/dto-filter.md) | Optional | - |

## Example

```ts
import { DtoListDeviceExperienceHistoryRequest } from 'verizonlib';

const dtoListDeviceExperienceHistoryRequest: DtoListDeviceExperienceHistoryRequest = {
  accountname: '0000123456-00001',
  filter: {
    expand: '$expand0',
    limitnumber: 100,
    nopagination: false,
    page: '$page0',
    pagenumber: 64,
  },
};
```

