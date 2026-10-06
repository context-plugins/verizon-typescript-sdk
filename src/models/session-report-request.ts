import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Request for obtaining a session report. */
export type SessionReportRequest = {
  /**
   * The numeric ID of the account and must include leading zeroes. This value is indentical to
   * `accountName`.
   */
  accountNumber: string;
  /** The International Mobile Equipment Identifier of the device. */
  imei: string;
  /**
   * Start date of session to include. If not specified information will be shown from the earliest
   * available (180 days). Can be either date in ISO 8601 format or predefined constants.
   */
  startDate?: string;
  /**
   * End date of session to include. If not specified information will be shown to the latest
   * available. Can be either date in ISO 8601 format or predefined constants.
   */
  endDate?: string;
  /** Optional filter — minimum session duration */
  durationLow?: number;
  /** Optional filter — maximum session duration */
  durationHigh?: number;
};

export const sessionReportRequestSchema: Schema<SessionReportRequest> = s.object<SessionReportRequest>({
  accountNumber: s.string(),
  imei: s.string(),
  startDate: s.optional(s.string()),
  endDate: s.optional(s.string()),
  durationLow: s.optional(s.int()),
  durationHigh: s.optional(s.int()),
});
