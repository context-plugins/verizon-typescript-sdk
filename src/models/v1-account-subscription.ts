import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type V1AccountSubscription = {
  accountName?: string;
  purchaseType?: string;
  licenseCount?: number;
  licenseUsedCount?: number;
  updateTime?: string;
};

export const v1AccountSubscriptionSchema: Schema<V1AccountSubscription> = s.object<V1AccountSubscription>({
  accountName: s.optional(s.string()),
  purchaseType: s.optional(s.string()),
  licenseCount: s.optional(s.number()),
  licenseUsedCount: s.optional(s.number()),
  updateTime: s.optional(s.string()),
});
