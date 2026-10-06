import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * QUEUED or COMPLETED. Requests for IoT devices with cacheMode=0 (cached) have status=COMPLETED;
 * all other requests are QUEUED.
 */
export const AggregatedReportCallbackStatus = {
  Queued: "QUEUED",
  Completed: "COMPLETED",
} as const;
export type AggregatedReportCallbackStatus =
  | (typeof AggregatedReportCallbackStatus)[keyof typeof AggregatedReportCallbackStatus]
  | (string & {});

export const aggregatedReportCallbackStatusSchema: EnumSchema<AggregatedReportCallbackStatus> =
  s.enumOf<AggregatedReportCallbackStatus>(AggregatedReportCallbackStatus);
