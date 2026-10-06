import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The road user types:
 *   - Vehicle: Vehicles with a metal box. Example: Car, Truck, Bus, etc.
 *   - VulnerableRoadUser: Road users without protective housing. Example: Pedestrian, Cyclist,
 *     Motorcyclist, etc.
 */
export const RoadUserTypes = {
  VulnerableRoadUser: "VulnerableRoadUser",
  Vehicle: "Vehicle",
} as const;
export type RoadUserTypes = (typeof RoadUserTypes)[keyof typeof RoadUserTypes] | (string & {});

export const roadUserTypesSchema: EnumSchema<RoadUserTypes> = s.enumOf<RoadUserTypes>(RoadUserTypes);
