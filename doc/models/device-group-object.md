
# Device Group Object

## Structure

`DeviceGroupObject`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `deviceGroup` | [`DeviceGroupFilterCriteria \| undefined`](../../doc/models/device-group-filter-criteria.md) | Optional | - |

## Example

```ts
import { DeviceGroupObject } from 'verizonlib';

const deviceGroupObject: DeviceGroupObject = {
  deviceGroup: {
    filterCriteria: {
      deviceGroupName: 'deviceGroupName4',
      individualOrCombined: 'IndividualOrCombined4',
      accountName: 'accountName0',
    },
  },
};
```

