import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  aggregatedReportCallbackStatusSchema,
  type AggregatedReportCallbackStatus,
} from "./aggregated-report-callback-status.js";

/** Aggregated usage report (Asynchronous). */
export type AggregatedReportCallbackResult = {
  /**
   * A unique string (UUID) that associates the request with the location report information that is
   * sent in asynchronous callback message.ThingSpace will send a separate callback message for each
   * device that was in the request. All of the callback messages will have a txid.
   */
  txid?: string;
  /**
   * QUEUED or COMPLETED. Requests for IoT devices with cacheMode=0 (cached) have status=COMPLETED;
   * all other requests are QUEUED.
   */
  status?: AggregatedReportCallbackStatus;
};

export const aggregatedReportCallbackResultSchema: Schema<AggregatedReportCallbackResult> =
  s.object<AggregatedReportCallbackResult>({
    txid: s.optional(s.string()),
    status: s.optional(s.lazy(() => aggregatedReportCallbackStatusSchema)),
  });
