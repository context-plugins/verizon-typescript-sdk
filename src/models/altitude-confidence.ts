import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const AltitudeConfidence = {
  Alt00001: "alt-000-01",
  Alt00002: "alt-000-02",
  Alt00005: "alt-000-05",
  Alt00010: "alt-000-10",
  Alt00020: "alt-000-20",
  Alt00050: "alt-000-50",
  Alt00100: "alt-001-00",
  Alt00200: "alt-002-00",
  Alt00500: "alt-005-00",
  Alt01000: "alt-010-00",
  Alt02000: "alt-020-00",
  Alt05000: "alt-050-00",
  Alt10000: "alt-100-00",
  Alt20000: "alt-200-00",
  OutOfRange: "outOfRange",
  Unavailable: "unavailable",
} as const;
export type AltitudeConfidence = (typeof AltitudeConfidence)[keyof typeof AltitudeConfidence] | (string & {});

export const altitudeConfidenceSchema: EnumSchema<AltitudeConfidence> =
  s.enumOf<AltitudeConfidence>(AltitudeConfidence);
