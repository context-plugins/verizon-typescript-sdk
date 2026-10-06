import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DeviceLocationSubscription = {
  /** Account identifier in "##########-#####". */
  accountName?: string;
  /** Location service license type. */
  locType?: string;
  /** The number of billable location requests allowed per billing cycle. */
  maxAllowance?: string;
  /** Location service purchase time. */
  purchaseTime?: string;
};

export const deviceLocationSubscriptionSchema: Schema<DeviceLocationSubscription> =
  s.object<DeviceLocationSubscription>({
    accountName: s.optional(s.string()),
    locType: s.optional(s.string()),
    maxAllowance: s.optional(s.string()),
    purchaseTime: s.optional(s.string()),
  });
