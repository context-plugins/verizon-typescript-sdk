import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { dtoHealthScoreMetricSchema, type DtoHealthScoreMetric } from "./dto-health-score-metric.js";

export type DtoGetNetworkHealthScoreResponse = {
  networksummary?: DtoHealthScoreMetric[];
  overallsummary?: DtoHealthScoreMetric[];
};

export const dtoGetNetworkHealthScoreResponseSchema: Schema<DtoGetNetworkHealthScoreResponse> =
  s.object<DtoGetNetworkHealthScoreResponse>({
    networksummary: s.optional(s.array(s.lazy(() => dtoHealthScoreMetricSchema))),
    overallsummary: s.optional(s.array(s.lazy(() => dtoHealthScoreMetricSchema))),
  });
