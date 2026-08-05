
# Labels List

## Structure

`LabelsList`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `deviceIds` | [`LabelsListDeviceIds[] \| undefined`](../../doc/models/containers/labels-list-device-ids.md) | Optional | This is Array of a container for any-of cases.<br><br>**Constraints**: *Maximum Items*: `100` |

## Example

```ts
import { LabelsList } from 'verizonlib';

const labelsList: LabelsList = {
  deviceIds: [
    {
      name: 'name6',
      value: 'value8',
    }
  ],
};
```

