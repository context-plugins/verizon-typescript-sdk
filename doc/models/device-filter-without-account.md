
# Device Filter without Account

Filter for devices without account.

## Structure

`DeviceFilterWithoutAccount`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `groupName` | `string \| undefined` | Optional | Only include devices that are in this device group. |
| `servicePlan` | `string \| undefined` | Optional | Only include devices that have this service plan. |
| `customFields` | [`CustomFields[] \| undefined`](../../doc/models/custom-fields.md) | Optional | Custom field names and values, if you want to only include devices that have matching values. |

## Example

```ts
import { DeviceFilterWithoutAccount } from 'verizonlib';

const deviceFilterWithoutAccount: DeviceFilterWithoutAccount = {
  groupName: 'suspended devices',
  servicePlan: 'servicePlan2',
  customFields: [
    {
      key: 'key0',
      value: 'value2',
    },
    {
      key: 'key0',
      value: 'value2',
    },
    {
      key: 'key0',
      value: 'value2',
    }
  ],
};
```

