import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const AwarenessDistance = {
  LessThan50M: "lessThan50m",
  LessThan100M: "lessThan100m",
  LessThan200M: "lessThan200m",
  LessThan500M: "lessThan500m",
  LessThan1000M: "lessThan1000m",
  LessThan5Km: "lessThan5km",
  LessThan10Km: "lessThan10km",
  Over10Km: "over10km",
} as const;
export type AwarenessDistance = (typeof AwarenessDistance)[keyof typeof AwarenessDistance] | (string & {});

export const awarenessDistanceSchema: EnumSchema<AwarenessDistance> =
  s.enumOf<AwarenessDistance>(AwarenessDistance);
