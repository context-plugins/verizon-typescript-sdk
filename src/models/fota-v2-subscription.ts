import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** FOTA Subscription. */
export type FotaV2Subscription = {
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

export const fotaV2SubscriptionSchema: Schema<FotaV2Subscription> = s.object<FotaV2Subscription>({
  accountName: s.optional(s.string()),
  purchaseType: s.optional(s.string()),
  licenseCount: s.optional(s.int()),
  licenseUsedCount: s.optional(s.int()),
  updateTime: s.optional(s.string()),
});
