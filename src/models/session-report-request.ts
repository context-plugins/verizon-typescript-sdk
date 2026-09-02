import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SessionReportRequest = {
  accountNumber: string;
  imei: string;
  startDate?: string;
  endDate?: string;
  durationLow?: number;
  durationHigh?: number;
};

export const sessionReportRequestSchema: Schema<SessionReportRequest> = s.object<SessionReportRequest>({
  accountNumber: s.string(),
  imei: s.string(),
  startDate: s.optional(s.string()),
  endDate: s.optional(s.string()),
  durationLow: s.optional(s.number()),
  durationHigh: s.optional(s.number()),
});
