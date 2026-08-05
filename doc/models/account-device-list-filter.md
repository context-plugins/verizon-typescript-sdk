
# Account Device List Filter

Filter for a list of devices.

## Structure

`AccountDeviceListFilter`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `deviceIdentifierFilters` | [`DeviceIdSearch[]`](../../doc/models/device-id-search.md) | Required | Specify the kind of the device identifier, the type of match, and the string that you want to match. |

## Example

```ts
import { AccountDeviceListFilter } from 'verizonlib';

const accountDeviceListFilter: AccountDeviceListFilter = {
  deviceIdentifierFilters: [
    {
      contains: '4259',
      kind: 'iccid',
      startswith: 'startswith8',
      endswith: 'endswith0',
    }
  ],
};
```

