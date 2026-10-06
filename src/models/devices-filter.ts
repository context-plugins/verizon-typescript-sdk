import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { clientSubtypeSchema, type ClientSubtype } from "./client-subtype.js";
import { etxClientTypeSchema, type EtxClientType } from "./etx-client-type.js";

/**
 * Optional filter criteria. Can specify one or more of:
 * - ClientType: Filter devices by client type
 * - ClientSubtype: Filter devices by client subtype
 * - MecId: Filter devices by MEC ID
 * - PageSize: Number of devices to return per page
 *
 * Valid combinations:
 * - ClientType only
 * - ClientSubtype only
 * - ClientType and ClientSubtype together
 * - MecId only
 * - MecId and ClientType together
 * - MecId and ClientSubtype together
 * - MecId, ClientType, and ClientSubtype together
 * - PageSize only
 * - PageSize with any of the above combinations
 *
 * If no filter is provided, all devices for the vendor are returned.
 */
export type DevicesFilter = {
  /**
   * The type of the client that is to be registered. This is one of the major traffic participant
   * groups considered in V2X communication. The system uses this value to define which topics the
   * client will be able to publish and subscribe to.
   *
   * Values:
   * - **Vehicle** - Vehicle with an enclosure around the passengers. (Subtypes: Motorcycle,
   *   PassengerCar, Truck, Bus, EmergencyVehicle, SchoolBus, MaintenanceVehicle)
   * - **VulnerableRoadUser** - Traffic participants without a protecting enclosure. (Subtypes:
   *   Bicycle, Pedestrian, Scooter)
   * - **TrafficLightController** - A Traffic light controller system. (Subtypes: NA)
   * - **InfrastructureSensor** - Sensors that are deployed in the infrastructure. (Subtypes:
   *   RoadSideUnit, Camera, Lidar, Radar, InductiveLoop, MagneticSensor)
   * - **OnboardSensor** - Sensors that are onboard on a vehicle(Subtypes: Camera, Lidar, Radar)
   * - **Software** - A software system or application. (Subtypes: Platform, Application, NA)
   */
  clientType?: EtxClientType;
  /**
   * The subtype or subgroup of the client type. This further specifies the client type. For example
   * it will specify if the client is a passenger car or a truck. See the ClientType description for
   * the supported Subtypes for each client type.
   */
  clientSubtype?: ClientSubtype;
  /**
   * The unique identifier for a Multi-access Edge Computing (MEC) location in the ETX system. This
   * ID is used to reference and manage MEC locations for registration, update, retrieval, and
   * deletion operations.
   */
  mecId?: string;
  /** Number of devices to return per page. If not provided, the server default is used. */
  pageSize?: number;
};

export const devicesFilterSchema: Schema<DevicesFilter> = s.object<DevicesFilter>({
  clientType: s.optional(s.lazy(() => etxClientTypeSchema)),
  clientSubtype: s.optional(s.lazy(() => clientSubtypeSchema)),
  mecId: s.optional(s.string()),
  pageSize: s.optional(s.int()),
  _keysMap: {
    clientType: "ClientType",
    clientSubtype: "ClientSubtype",
    mecId: "MecId",
    pageSize: "PageSize",
  },
});
