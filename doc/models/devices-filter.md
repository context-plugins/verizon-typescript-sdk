
# Devices Filter

Optional filter criteria. Can specify one or more of:

- ClientType: Filter devices by client type
- ClientSubtype: Filter devices by client subtype
- MecId: Filter devices by MEC ID
- PageSize: Number of devices to return per page

Valid combinations:

- ClientType only
- ClientSubtype only
- ClientType and ClientSubtype together
- MecId only
- MecId and ClientType together
- MecId and ClientSubtype together
- MecId, ClientType, and ClientSubtype together
- PageSize only
- PageSize with any of the above combinations

If no filter is provided, all devices for the vendor are returned.

## Structure

`DevicesFilter`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `clientType` | [`EtxClientTypeEnum \| undefined`](../../doc/models/etx-client-type-enum.md) | Optional | The type of the client that is to be registered. This is one of the major traffic participant groups considered in V2X communication. The system uses this value to define which topics the client will be able to publish and subscribe to.<br><br>Values:<br><br>- **Vehicle** - Vehicle with an enclosure around the passengers. (Subtypes: Motorcycle, PassengerCar, Truck, Bus, EmergencyVehicle, SchoolBus, MaintenanceVehicle)<br>- **VulnerableRoadUser** - Traffic participants without a protecting enclosure. (Subtypes: Bicycle, Pedestrian, Scooter)<br>- **TrafficLightController** - A Traffic light controller system. (Subtypes: NA)<br>- **InfrastructureSensor** - Sensors that are deployed in the infrastructure. (Subtypes: RoadSideUnit, Camera, Lidar, Radar, InductiveLoop, MagneticSensor)<br>- **OnboardSensor** - Sensors that are onboard on a vehicle(Subtypes: Camera, Lidar, Radar)<br>- **Software** - A software system or application. (Subtypes: Platform, Application, NA) |
| `clientSubtype` | [`ClientSubtypeEnum \| undefined`](../../doc/models/client-subtype-enum.md) | Optional | The subtype or subgroup of the client type. This further specifies the client type. For example it will specify if the client is a passenger car or a truck. See the ClientType description for the supported Subtypes for each client type. |
| `mecId` | `string \| undefined` | Optional | The unique identifier for a Multi-access Edge Computing (MEC) location in the ETX system.<br>This ID is used to reference and manage MEC locations for registration, update, retrieval, and deletion operations.<br><br>**Constraints**: *Maximum Length*: `128`, *Pattern*: `^[a-z0-9\-]+$` |
| `pageSize` | `number \| undefined` | Optional | Number of devices to return per page. If not provided, the server default is used.<br><br>**Constraints**: `>= 1`, `<= 500` |

## Example

```ts
import {
  ClientSubtypeEnum,
  DevicesFilter,
  EtxClientTypeEnum,
} from 'verizonlib';

const devicesFilter: DevicesFilter = {
  clientType: EtxClientTypeEnum.TrafficLightController,
  clientSubtype: ClientSubtypeEnum.Pedestrian,
  mecId: 'tsp-testmec-1-eks-dev-edge-us-east-1-imp-dev',
  pageSize: 142,
};
```

