import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Bill usage request. */
export type BillUsageRequest = {
  /** Account identifier. */
  accountName: string;
  /** Start date to search for billable usage, mm-dd-yyyy. */
  startDate: string;
  /** End date to search for billable usage, mm-dd-yyyy. */
  endDate: string;
  /** Request usage for single or multiple accounts. */
  usageForAllAccounts?: boolean;
};

export const billUsageRequestSchema: Schema<BillUsageRequest> = s.object<BillUsageRequest>({
  accountName: s.string(),
  startDate: s.string(),
  endDate: s.string(),
  usageForAllAccounts: s.optional(s.boolean()),
});
