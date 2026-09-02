import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const AggregatedReportCallbackStatus = {
  Queued: "QUEUED",
  Completed: "COMPLETED",
} as const;
export type AggregatedReportCallbackStatus =
  | (typeof AggregatedReportCallbackStatus)[keyof typeof AggregatedReportCallbackStatus]
  | (string & {});

export const aggregatedReportCallbackStatusSchema: EnumSchema<AggregatedReportCallbackStatus> =
  s.enumOf<AggregatedReportCallbackStatus>(AggregatedReportCallbackStatus);
