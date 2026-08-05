
# Find Device by Property Response List

A success response includes an array of all matching devices. Each device includes the full device resource definition.

## Structure

`FindDeviceByPropertyResponseList`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `deviceProperty` | [`FindDeviceByPropertyResponse[] \| undefined`](../../doc/models/find-device-by-property-response.md) | Optional | **Constraints**: *Maximum Items*: `100` |

## Example

```ts
import { FindDeviceByPropertyResponseList } from 'verizonlib';

const findDeviceByPropertyResponseList: FindDeviceByPropertyResponseList = {
  deviceProperty: [
    {
      billingaccountid: 'billingaccountid4',
      createdon: 'createdon6',
      eventretention: 'eventretention2',
      iccid: 'iccid4',
      id: 'id8',
    },
    {
      billingaccountid: 'billingaccountid4',
      createdon: 'createdon6',
      eventretention: 'eventretention2',
      iccid: 'iccid4',
      id: 'id8',
    },
    {
      billingaccountid: 'billingaccountid4',
      createdon: 'createdon6',
      eventretention: 'eventretention2',
      iccid: 'iccid4',
      id: 'id8',
    }
  ],
};
```

