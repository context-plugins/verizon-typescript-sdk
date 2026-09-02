import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PositionData = {
  time?: string;
  utcoffset?: string;
  x?: string;
  y?: string;
  radius?: string;
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
