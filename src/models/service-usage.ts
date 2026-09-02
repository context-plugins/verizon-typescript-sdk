import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ServiceUsage = {
  accountName?: string;
  transactionsCount?: string;
};

export const serviceUsageSchema: Schema<ServiceUsage> = s.object<ServiceUsage>({
  accountName: s.optional(s.string()),
  transactionsCount: s.optional(s.string()),
});
