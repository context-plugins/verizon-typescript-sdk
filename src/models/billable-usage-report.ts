import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { serviceUsageSchema, type ServiceUsage } from "./service-usage.js";

/** Bill usage report. */
export type BillableUsageReport = {
  /** Account identifier. */
  accountName?: string;
  /** The usage is for a single or multiple accounts. */
  usageForAllAccounts?: boolean;
  /** SKU Name of the service subscription. */
  skuName?: string;
  /** The number of location requests included with the subscription type. */
  transactionsAllowed?: string;
  /**
   * The total number of billable device location requests during the reporting period from all
   * included accounts.
   */
  totalTransactionCount?: string;
  primaryAccount?: ServiceUsage;
  /** Zero or more managed accounts. */
  managedAccounts?: ServiceUsage[];
};

export const billableUsageReportSchema: Schema<BillableUsageReport> = s.object<BillableUsageReport>({
  accountName: s.optional(s.string()),
  usageForAllAccounts: s.optional(s.boolean()),
  skuName: s.optional(s.string()),
  transactionsAllowed: s.optional(s.string()),
  totalTransactionCount: s.optional(s.string()),
  primaryAccount: s.optional(s.lazy(() => serviceUsageSchema)),
  managedAccounts: s.optional(s.array(s.lazy(() => serviceUsageSchema))),
  _keysMap: {
    primaryAccount: "PrimaryAccount",
    managedAccounts: "ManagedAccounts",
  },
});
