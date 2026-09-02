import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { extendedAttributesSchema, type ExtendedAttributes } from "./extended-attributes.js";

export type SecuritySubscription = {
  extendedAttributes?: ExtendedAttributes[];
  licenseAssigned?: number;
  licenseAvailable?: number;
  licensePurchased?: number;
  licenseType?: string;
  skuNumber?: string;
};

export const securitySubscriptionSchema: Schema<SecuritySubscription> = s.object<SecuritySubscription>({
  extendedAttributes: s.optional(s.array(s.lazy(() => extendedAttributesSchema))),
  licenseAssigned: s.optional(s.number()),
  licenseAvailable: s.optional(s.number()),
  licensePurchased: s.optional(s.number()),
  licenseType: s.optional(s.string()),
  skuNumber: s.optional(s.string()),
});
