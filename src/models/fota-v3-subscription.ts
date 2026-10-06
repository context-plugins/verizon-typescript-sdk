import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Information for licenses applied to devices. */
export type FotaV3Subscription = {
  /** Account identifier in "##########-#####". */
  accountName?: string;
  /** Subscription models used by the account. */
  purchaseType?: string;
  /** Number of monthly licenses in an MRC subscription. */
  licenseCount?: number;
  /** Number of licenses currently assigned to devices. */
  licenseUsedCount?: number;
  /** The date and time of when the subscription was last updated. */
  updateTime?: string;
};

export const fotaV3SubscriptionSchema: Schema<FotaV3Subscription> = s.object<FotaV3Subscription>({
  accountName: s.optional(s.string()),
  purchaseType: s.optional(s.string()),
  licenseCount: s.optional(s.int()),
  licenseUsedCount: s.optional(s.int()),
  updateTime: s.optional(s.string()),
});
