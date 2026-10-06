import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { extendedAttributesSchema, type ExtendedAttributes } from "./extended-attributes.js";

/** Subscription of the device. */
export type SecuritySubscription = {
  /** Attributes of the subscription. */
  extendedAttributes?: ExtendedAttributes[];
  /** The total number of licenses for this license type that are assigned to device SIMs. */
  licenseAssigned?: number;
  /**
   * The total number of licenses for this license type that are available to assign to device SIMs.
   */
  licenseAvailable?: number;
  /** The total number of licenses purchased for the license type. */
  licensePurchased?: number;
  /** The license type associated with the skuNumber. */
  licenseType?: string;
  /** The skuNumber that identifies the license type. */
  skuNumber?: string;
};

export const securitySubscriptionSchema: Schema<SecuritySubscription> = s.object<SecuritySubscription>({
  extendedAttributes: s.optional(s.array(s.lazy(() => extendedAttributesSchema))),
  licenseAssigned: s.optional(s.int()),
  licenseAvailable: s.optional(s.int()),
  licensePurchased: s.optional(s.int()),
  licenseType: s.optional(s.string()),
  skuNumber: s.optional(s.string()),
});
