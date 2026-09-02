import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type BillUsageRequest = {
  accountName: string;
  startDate: string;
  endDate: string;
  usageForAllAccounts?: boolean;
};

export const billUsageRequestSchema: Schema<BillUsageRequest> = s.object<BillUsageRequest>({
  accountName: s.string(),
  startDate: s.string(),
  endDate: s.string(),
  usageForAllAccounts: s.optional(s.boolean()),
});
