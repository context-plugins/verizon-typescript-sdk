import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { securitySubscriptionSchema, type SecuritySubscription } from "./security-subscription.js";

export type SecuritySubscriptionResult = {
  accountName?: string;
  subscriptionList?: SecuritySubscription[];
};

export const securitySubscriptionResultSchema: Schema<SecuritySubscriptionResult> =
  s.object<SecuritySubscriptionResult>({
    accountName: s.optional(s.string()),
    subscriptionList: s.optional(s.array(s.lazy(() => securitySubscriptionSchema))),
  });
