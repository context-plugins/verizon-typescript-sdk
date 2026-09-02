import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  aggregatedReportCallbackStatusSchema,
  type AggregatedReportCallbackStatus,
} from "./aggregated-report-callback-status.js";

export type AggregatedReportCallbackResult = {
  txid?: string;
  status?: AggregatedReportCallbackStatus;
};

export const aggregatedReportCallbackResultSchema: Schema<AggregatedReportCallbackResult> =
  s.object<AggregatedReportCallbackResult>({
    txid: s.optional(s.string()),
    status: s.optional(s.lazy(() => aggregatedReportCallbackStatusSchema)),
  });
