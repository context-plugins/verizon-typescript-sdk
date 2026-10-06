import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ServiceUsage = {
  /** Account identifier. */
  accountName?: string;
  /** Total requests for the account during the reporting period. */
  transactionsCount?: string;
};

export const serviceUsageSchema: Schema<ServiceUsage> = s.object<ServiceUsage>({
  accountName: s.optional(s.string()),
  transactionsCount: s.optional(s.string()),
});
