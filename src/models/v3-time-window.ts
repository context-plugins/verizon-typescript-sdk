import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Time window. */
export type V3TimeWindow = {
  /** Start hour in range [0..23], current hour >= startTime. */
  startTime: number;
  /** End hour in range [1..24], current hour < endTime. */
  endTime: number;
};

export const v3TimeWindowSchema: Schema<V3TimeWindow> = s.object<V3TimeWindow>({
  startTime: s.int(),
  endTime: s.int(),
});
