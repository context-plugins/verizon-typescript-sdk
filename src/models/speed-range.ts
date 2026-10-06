import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Acceptable speed range for road users in m/s. */
export type SpeedRange = {
  /** The minimum required speed in m/s. */
  min: number;
  /** The maximum acceptable speed in m/s. */
  max: number;
};

export const speedRangeSchema: Schema<SpeedRange> = s.object<SpeedRange>({
  min: s.float64(),
  max: s.float64(),
});
