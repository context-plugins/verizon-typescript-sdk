import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { serviceUsageSchema, type ServiceUsage } from "./service-usage.js";

export type BillableUsageReport = {
  accountName?: string;
  usageForAllAccounts?: boolean;
  skuName?: string;
  transactionsAllowed?: string;
  totalTransactionCount?: string;
  primaryAccount?: ServiceUsage;
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
