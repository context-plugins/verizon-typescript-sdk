
# Devices Request

Request body for retrieving devices based on vendorID and optional filters

## Structure

`DevicesRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `vendorId` | `string` | Required | The ID the vendor wants its devices to be registered under. E.g. Verizon, GM, Ford, etc.<br><br>**Constraints**: *Maximum Length*: `64`, *Pattern*: `^[a-zA-Z0-9]+$` |
| `filter` | [`DevicesRequestFilter \| undefined`](../../doc/models/containers/devices-request-filter.md) | Optional | This is a container for one-of cases. |

## Example

```ts
import {
  ClientSubtypeEnum,
  DevicesRequest,
  EtxClientTypeEnum,
} from 'verizonlib';

const devicesRequest: DevicesRequest = {
  vendorId: 'VerizonETX',
  filter: {
    clientType: EtxClientTypeEnum.TrafficLightController,
    clientSubtype: ClientSubtypeEnum.EmergencyVehicle,
    mecId: 'MecId4',
    pageSize: 182,
  },
};
```

