import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { securitySubscriptionSchema, type SecuritySubscription } from "./security-subscription.js";

/** Response for a subscription request. */
export type SecuritySubscriptionResult = {
  /** The name of a billing account. */
  accountName?: string;
  /** The list of SKU numbers and counts for each license type specified in the request. */
  subscriptionList?: SecuritySubscription[];
};

export const securitySubscriptionResultSchema: Schema<SecuritySubscriptionResult> =
  s.object<SecuritySubscriptionResult>({
    accountName: s.optional(s.string()),
    subscriptionList: s.optional(s.array(s.lazy(() => securitySubscriptionSchema))),
  });
