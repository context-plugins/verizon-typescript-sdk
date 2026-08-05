
# Dto Bulk Update

## Structure

`DtoBulkUpdate`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountname` | `string \| undefined` | Optional | The numeric account name, which must include leading zeros |
| `resourceidentifiers` | [`TheIDresourceandDeviceID[] \| undefined`](../../doc/models/the-i-dresourceand-device-id.md) | Optional | - |
| `smartalert` | [`BulkUpdateSmartalert \| undefined`](../../doc/models/bulk-update-smartalert.md) | Optional | - |

## Example

```ts
import { DtoBulkUpdate } from 'verizonlib';

const dtoBulkUpdate: DtoBulkUpdate = {
  accountname: '0000123456-00001',
  resourceidentifiers: [
    {
      id: 'ee70a869-eeee-ffff-gggg-07c14c31f96e',
      deviceid: 'deviceid4',
    },
    {
      id: 'id4',
      deviceid: '131501ff-eeee-ffff-gggg-647d19179a12',
    }
  ],
  smartalert: {
    name: 'name0',
  },
};
```

