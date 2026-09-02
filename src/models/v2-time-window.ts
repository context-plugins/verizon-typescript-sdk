import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type V2TimeWindow = {
  startTime: number;
  endTime: number;
};

export const v2TimeWindowSchema: Schema<V2TimeWindow> = s.object<V2TimeWindow>({
  startTime: s.number(),
  endTime: s.number(),
});
