import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const RoadUserTypes = {
  VulnerableRoadUser: "VulnerableRoadUser",
  Vehicle: "Vehicle",
} as const;
export type RoadUserTypes = (typeof RoadUserTypes)[keyof typeof RoadUserTypes] | (string & {});

export const roadUserTypesSchema: EnumSchema<RoadUserTypes> = s.enumOf<RoadUserTypes>(RoadUserTypes);
