import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { actionIdSchema, type ActionId } from "./action-id.js";
import { awarenessDistanceSchema, type AwarenessDistance } from "./awareness-distance.js";
import { eventPositionSchema, type EventPosition } from "./event-position.js";

/**
 * This represent the management container describing the meta information about the event, such as
 * the detection time, the event's location, the source of the event, and the notification distance.
 */
export type Management = {
  actionId: ActionId;
  /** Timestamp in milliseconds since start of 2004 when event was first generated */
  detectionTime: number;
  /** Timestamp in milliseconds since start of 2004 when the DENM message was generated. */
  referenceTime: number;
  eventPosition: EventPosition;
  /** Specifies how far the event is relevant to. */
  awarenessDistance?: AwarenessDistance;
  /**
   * The type of ITS station that generated the DENM. The value shall be set to:
   * - 0 `unknown` - information about the ITS-S context is not provided,
   * - 1 `pedestrian` - ITS-S carried by human being not using a mechanical device for their trip
   *   (VRU profile 1),
   * - 2 `cyclist` - ITS-S mounted on non-motorized unicycles, bicycles , tricycles, quadracycles
   *   (VRU profile 2),
   * - 3 `moped` - ITS-S mounted on light motor vehicles with less than four wheels as defined in
   *   UNECE/TRANS/WP.29/78/Rev.4 [16] class L1, L2 (VRU Profile 3),
   * - 4 `motorcycles` - ITS-S mounted on motor vehicles with less than four wheels as defined in
   *   UNECE/TRANS/WP.29/78/Rev.4 [16] class L3, L4, L5, L6, L7 (VRU Profile 3),
   * - 5 `passengerCar` - ITS-S mounted on small passenger vehicles as defined in
   *   UNECE/TRANS/WP.29/78/Rev.4 [16] class M1,
   * - 6 `bus` - ITS-S mounted on large passenger vehicles as defined in UNECE/TRANS/WP.29/78/Rev.4
   *   [16] class M2, M3,
   * - 7 `lightTruck` - ITS-S mounted on light Goods Vehicles as defined in
   *   UNECE/TRANS/WP.29/78/Rev.4 [16] class N1,
   * - 8 `heavyTruck` - ITS-S mounted on Heavy Goods Vehicles as defined in
   *   UNECE/TRANS/WP.29/78/Rev.4 [16] class N2 and N3,
   * - 9 `trailer` - ITS-S mounted on an unpowered vehicle that is intended to be towed by a powered
   *   vehicle as defined in UNECE/TRANS/WP.29/78/Rev.4 [16] class O,
   * - 10 `specialVehicles` - ITS-S mounted on vehicles which have special purposes other than the
   *   above (e.g. moving road works vehicle),
   * - 11 `tram` - ITS-S mounted on a vehicle which runs on tracks along public streets,
   * - 12 `lightVruVehicle` - ITS-S carried by a human being traveling on light vehicle , incl.
   *   possible use of roller skates or skateboards (VRU profile 2),
   * - 13 `animal` - ITS-S carried by an animal presenting a safety risk to other road users e.g.
   *   domesticated dog in a city or horse (VRU Profile 4),
   * - 14 - reserved for future usage,
   * - 15 `roadSideUnit` - ITS-S mounted on an infrastructure typically positioned outside of the
   *   drivable roadway (e.g. on a gantry, on a pole, on a stationary road works trailer); the
   *   infrastructure is static during the entire operation period of the ITS-S (e.g. no stop and go
   *   activity),
   * - 16-255 - are reserved for future usage.
   */
  stationType: number;
};

export const managementSchema: Schema<Management> = s.object<Management>({
  actionId: actionIdSchema,
  detectionTime: s.int(),
  referenceTime: s.int(),
  eventPosition: eventPositionSchema,
  awarenessDistance: s.optional(s.lazy(() => awarenessDistanceSchema)),
  stationType: s.int(),
});
