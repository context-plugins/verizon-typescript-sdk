import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Request for getting an aggregated session report. */
export type AggregateSessionReportRequest = {
  /**
   * The numeric ID of the account and must include leading zeroes. This value is indentical to
   * `accountName`.
   */
  accountNumber: string;
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
  /**
   * Devices for which return usage info. Could be 0, 1 or more. In case of 0 will return all
   * devices belonging to customer (except of filtered by other parameters).
   */
  imei: string[];
  /** Optional filter — only include devices matching this device group name. */
  deviceGroup?: string;
  /** Optional filter — only include devices matching this carrier rate plan code. */
  dataPlan?: string;
  /** Optional filter — when "true", returns only devices with no sessions. */
  noSessionFlag?: boolean;
};

export const aggregateSessionReportRequestSchema: Schema<AggregateSessionReportRequest> =
  s.object<AggregateSessionReportRequest>({
    accountNumber: s.string(),
    startDate: s.optional(s.string()),
    endDate: s.optional(s.string()),
    imei: s.array(s.string()),
    deviceGroup: s.optional(s.string()),
    dataPlan: s.optional(s.string()),
    noSessionFlag: s.optional(s.boolean()),
  });
