import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { reportStatusSchema, type ReportStatus } from "./report-status.js";

export type AsynchronousLocationRequestResult = {
  txid?: string;
  status?: ReportStatus;
  estimatedDuration?: string;
};

export const asynchronousLocationRequestResultSchema: Schema<AsynchronousLocationRequestResult> =
  s.object<AsynchronousLocationRequestResult>({
    txid: s.optional(s.string()),
    status: s.optional(s.lazy(() => reportStatusSchema)),
    estimatedDuration: s.optional(s.string()),
  });
