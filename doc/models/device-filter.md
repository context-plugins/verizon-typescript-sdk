
# Device Filter

Specify the kind of the device identifier, the type of match, and the string that you want to match.

## Structure

`DeviceFilter`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `account` | `string \| undefined` | Optional | The the billing account that the devices belong to. |
| `groupName` | `string \| undefined` | Optional | Only include devices that are in this device group. |
| `servicePlan` | `string \| undefined` | Optional | Only include devices that have this service plan. |
| `customFields` | [`CustomFields[] \| undefined`](../../doc/models/custom-fields.md) | Optional | Custom field names and values, if you want to only include devices that have matching values. |

## Example

```ts
import { DeviceFilter } from 'verizonlib';

const deviceFilter: DeviceFilter = {
  account: 'account4',
  groupName: 'Short-Haul Trucks',
  servicePlan: 'servicePlan6',
  customFields: [
    {
      key: 'CustomField1',
      value: 'East Region Trucks',
    }
  ],
};
```

