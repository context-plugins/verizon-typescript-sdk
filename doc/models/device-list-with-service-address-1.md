
# Device List with Service Address 1

## Structure

`DeviceListWithServiceAddress1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `deviceId` | [`DeviceListWithServiceAddress1DeviceId[] \| undefined`](../../doc/models/containers/device-list-with-service-address-1-device-id.md) | Optional | This is Array of a container for any-of cases. |
| `primaryPlaceofuse` | [`M5gBiprimaryPlaceofuse \| undefined`](../../doc/models/m5-g-biprimary-placeofuse.md) | Optional | - |

## Example

```ts
import { DeviceListWithServiceAddress1 } from 'verizonlib';

const deviceListWithServiceAddress1: DeviceListWithServiceAddress1 = {
  deviceId: [
    {
      id: 'id0',
      kind: 'kind8',
    },
    {
      id: 'id0',
      kind: 'kind8',
    }
  ],
  primaryPlaceofuse: {
    address: {
      addressLine1: 'addressLine18',
      city: 'city6',
      state: 'state2',
      zip: 'zip0',
      zip4: 'zip+48',
    },
    customerName: {
      firstName: 'firstName4',
      lastName: 'lastName4',
      middleName: 'middleName8',
      title: 'title4',
      suffex: 'suffex4',
    },
  },
};
```

