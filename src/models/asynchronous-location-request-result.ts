import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { reportStatusSchema, type ReportStatus } from "./report-status.js";

export type AsynchronousLocationRequestResult = {
  /** The transaction ID of the report. */
  txid?: string;
  /** Status of the report. */
  status?: ReportStatus;
  /** Estimated number of minutes required to complete the report. */
  estimatedDuration?: string;
};

export const asynchronousLocationRequestResultSchema: Schema<AsynchronousLocationRequestResult> =
  s.object<AsynchronousLocationRequestResult>({
    txid: s.optional(s.string()),
    status: s.optional(s.lazy(() => reportStatusSchema)),
    estimatedDuration: s.optional(s.string()),
  });
