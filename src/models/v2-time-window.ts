import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Allowed start and end time windows. */
export type V2TimeWindow = {
  /** Start hour in range [0..23], current hour >= startTime. */
  startTime: number;
  /** End hour in range [1..24], current hour < endTime. */
  endTime: number;
};

export const v2TimeWindowSchema: Schema<V2TimeWindow> = s.object<V2TimeWindow>({
  startTime: s.int(),
  endTime: s.int(),
});
