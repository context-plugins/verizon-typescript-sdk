
# Device Group Filter Criteria

## Structure

`DeviceGroupFilterCriteria`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `filterCriteria` | [`DeviceGroupFilter \| undefined`](../../doc/models/device-group-filter.md) | Optional | - |

## Example

```ts
import { DeviceGroupFilterCriteria } from 'verizonlib';

const deviceGroupFilterCriteria: DeviceGroupFilterCriteria = {
  filterCriteria: {
    deviceGroupName: 'deviceGroupName4',
    individualOrCombined: 'IndividualOrCombined4',
    accountName: 'accountName0',
  },
};
```

