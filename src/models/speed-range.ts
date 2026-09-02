import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SpeedRange = {
  min: number;
  max: number;
};

export const speedRangeSchema: Schema<SpeedRange> = s.object<SpeedRange>({
  min: s.number(),
  max: s.number(),
});
