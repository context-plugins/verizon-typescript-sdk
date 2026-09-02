import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type FotaV2Subscription = {
  accountName?: string;
  purchaseType?: string;
  licenseCount?: number;
  licenseUsedCount?: number;
  updateTime?: string;
};

export const fotaV2SubscriptionSchema: Schema<FotaV2Subscription> = s.object<FotaV2Subscription>({
  accountName: s.optional(s.string()),
  purchaseType: s.optional(s.string()),
  licenseCount: s.optional(s.number()),
  licenseUsedCount: s.optional(s.number()),
  updateTime: s.optional(s.string()),
});
