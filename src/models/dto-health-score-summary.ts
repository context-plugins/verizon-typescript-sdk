import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { dtoHealthScoreMetricSchema, type DtoHealthScoreMetric } from "./dto-health-score-metric.js";

export type DtoHealthScoreSummary = {
  overallsummary?: DtoHealthScoreMetric[];
};

export const dtoHealthScoreSummarySchema: Schema<DtoHealthScoreSummary> = s.object<DtoHealthScoreSummary>({
  overallsummary: s.optional(s.array(s.lazy(() => dtoHealthScoreMetricSchema))),
});
