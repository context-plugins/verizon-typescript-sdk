import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DtoQueryMetricsResponse = {
  /** The number of critical alerts in the queried time period */
  critical?: number;
  /** The number of major alerts in the queried time period */
  major?: number;
  /** The number of minor alerts in the queried time period */
  minor?: number;
  /** The number of sensor reports containing no alerts in the queried time period */
  noalert?: number;
  /** The total number of alerts in the queried time period */
  total?: number;
  /** The change in the number of critical alerts in the queried time period */
  deltacritical?: number;
  /** The change in the number of major alerts in the queried time period */
  deltamajor?: number;
  /** The change in the number of minor alerts in the queried time period */
  deltaminor?: number;
  /** The change in the number of sensor reports containing no alerts in the queried time period */
  deltanoalert?: number;
};

export const dtoQueryMetricsResponseSchema: Schema<DtoQueryMetricsResponse> =
  s.object<DtoQueryMetricsResponse>({
    critical: s.optional(s.int()),
    major: s.optional(s.int()),
    minor: s.optional(s.int()),
    noalert: s.optional(s.int()),
    total: s.optional(s.int()),
    deltacritical: s.optional(s.int()),
    deltamajor: s.optional(s.int()),
    deltaminor: s.optional(s.int()),
    deltanoalert: s.optional(s.int()),
  });
