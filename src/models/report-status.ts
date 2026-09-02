import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ReportStatus = {
  Queued: "QUEUED",
  Inprogress: "INPROGRESS",
  Completed: "COMPLETED",
} as const;
export type ReportStatus = (typeof ReportStatus)[keyof typeof ReportStatus] | (string & {});

export const reportStatusSchema: EnumSchema<ReportStatus> = s.enumOf<ReportStatus>(ReportStatus);
