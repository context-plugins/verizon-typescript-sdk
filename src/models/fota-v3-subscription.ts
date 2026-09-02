import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type FotaV3Subscription = {
  accountName?: string;
  purchaseType?: string;
  licenseCount?: number;
  licenseUsedCount?: number;
  updateTime?: string;
};

export const fotaV3SubscriptionSchema: Schema<FotaV3Subscription> = s.object<FotaV3Subscription>({
  accountName: s.optional(s.string()),
  purchaseType: s.optional(s.string()),
  licenseCount: s.optional(s.number()),
  licenseUsedCount: s.optional(s.number()),
  updateTime: s.optional(s.string()),
});
