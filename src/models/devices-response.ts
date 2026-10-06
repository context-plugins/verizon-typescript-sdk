import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { clientSubtypeSchema, type ClientSubtype } from "./client-subtype.js";
import { etxClientTypeSchema, type EtxClientType } from "./etx-client-type.js";

/** Device information containing ID, type classification, and associated MEC IDs */
export type DevicesResponse = {
  /**
   * The generated ID (UUID v4) for the device. It can be used as:
   *   - the MQTT Client ID when connecting to the Message Exchange system
   *   - a parameter when asking for the connection endpoint
   *   - a parameter when finishing the device registration
   *   - a parameter when unregistering the device
   */
  deviceId: string;
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
  clientType: EtxClientType;
  /**
   * The subtype or subgroup of the client type. This further specifies the client type. For example
   * it will specify if the client is a passenger car or a truck. See the ClientType description for
   * the supported Subtypes for each client type.
   */
  clientSubtype: ClientSubtype;
  mecIds: string[] | null;
};

export const devicesResponseSchema: Schema<DevicesResponse> = s.object<DevicesResponse>({
  deviceId: s.string(),
  clientType: etxClientTypeSchema,
  clientSubtype: clientSubtypeSchema,
  mecIds: s.nullable(s.array(s.string())),
  _keysMap: {
    deviceId: "DeviceID",
    clientType: "ClientType",
    clientSubtype: "ClientSubtype",
    mecIds: "MecIds",
  },
});
