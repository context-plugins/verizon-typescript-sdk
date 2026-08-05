
# ESIM Device List

## Structure

`ESIMDeviceList`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `deviceIds` | [`ESIMDeviceListDeviceIds[] \| undefined`](../../doc/models/containers/esim-device-list-device-ids.md) | Optional | This is Array of a container for any-of cases.<br><br>**Constraints**: *Maximum Items*: `100` |

## Example

```ts
import { ESIMDeviceList } from 'verizonlib';

const eSIMDeviceList: ESIMDeviceList = {
  deviceIds: [
    {
      id: 'id4',
      kind: 'kind2',
    }
  ],
};
```

