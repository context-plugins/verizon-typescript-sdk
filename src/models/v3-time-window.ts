import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type V3TimeWindow = {
  startTime: number;
  endTime: number;
};

export const v3TimeWindowSchema: Schema<V3TimeWindow> = s.object<V3TimeWindow>({
  startTime: s.number(),
  endTime: s.number(),
});
