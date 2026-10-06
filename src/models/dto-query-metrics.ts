import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DtoQueryMetrics = {
  /** The number of days in a recent period to query */
  days?: number;
};

export const dtoQueryMetricsSchema: Schema<DtoQueryMetrics> = s.object<DtoQueryMetrics>({
  days: s.optional(s.int()),
});
