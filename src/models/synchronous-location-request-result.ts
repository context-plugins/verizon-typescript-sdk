import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { reportStatusSchema, type ReportStatus } from "./report-status.js";

export type SynchronousLocationRequestResult = {
  /** The transaction ID of the report. */
  txid: string;
  /** Status of the report. */
  status: ReportStatus;
};

export const synchronousLocationRequestResultSchema: Schema<SynchronousLocationRequestResult> =
  s.object<SynchronousLocationRequestResult>({
    txid: s.string(),
    status: reportStatusSchema,
  });
