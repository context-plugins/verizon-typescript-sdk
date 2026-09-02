import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SecuritySubscriptionRequest = {
  accountName?: string;
  skuNumber?: string;
};

export const securitySubscriptionRequestSchema: Schema<SecuritySubscriptionRequest> =
  s.object<SecuritySubscriptionRequest>({
    accountName: s.optional(s.string()),
    skuNumber: s.optional(s.string()),
  });
