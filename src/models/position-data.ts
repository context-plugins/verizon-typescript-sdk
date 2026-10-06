import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Position data. */
export type PositionData = {
  /** Time location obtained. */
  time?: string;
  /** UTC offset of time. */
  utcoffset?: string;
  /** X coordinate of location. */
  x?: string;
  /** Y coordinate of location. */
  y?: string;
  /** Radius of the location in meters. */
  radius?: string;
  /** Whether requested accurary is met or not. */
  qos?: boolean;
};

export const positionDataSchema: Schema<PositionData> = s.object<PositionData>({
  time: s.optional(s.string()),
  utcoffset: s.optional(s.string()),
  x: s.optional(s.string()),
  y: s.optional(s.string()),
  radius: s.optional(s.string()),
  qos: s.optional(s.boolean()),
});
