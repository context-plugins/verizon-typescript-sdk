import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { reportStatusSchema, type ReportStatus } from "./report-status.js";

export type LocationReportStatus = {
  txid?: string;
  status?: ReportStatus;
};

export const locationReportStatusSchema: Schema<LocationReportStatus> = s.object<LocationReportStatus>({
  txid: s.optional(s.string()),
  status: s.optional(s.lazy(() => reportStatusSchema)),
});
