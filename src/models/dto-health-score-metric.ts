import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DtoHealthScoreMetric = {
  /**
   * The type of measurement and can be overallscore, networkscore, gatewayscore, sensorscore,
   * networkstatus, averagesignalstrength or networkavailabilitylast30
   */
  metrictype?: string;
  /** the value of the `metrictype` as a percentage */
  metricvalue?: string;
};

export const dtoHealthScoreMetricSchema: Schema<DtoHealthScoreMetric> = s.object<DtoHealthScoreMetric>({
  metrictype: s.optional(s.string()),
  metricvalue: s.optional(s.string()),
});
