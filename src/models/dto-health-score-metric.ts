import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DtoHealthScoreMetric = {
  metrictype?: string;
  metricvalue?: string;
};

export const dtoHealthScoreMetricSchema: Schema<DtoHealthScoreMetric> = s.object<DtoHealthScoreMetric>({
  metrictype: s.optional(s.string()),
  metricvalue: s.optional(s.string()),
});
