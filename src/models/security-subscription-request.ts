import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Request for a subscription. */
export type SecuritySubscriptionRequest = {
  /** The name of a billing account. */
  accountName?: string;
  /**
   * The Stock Keeping Unit (SKU). Valid skuNumbers for SIM-Secure for IoT are:SIMSec-IoT-Lt”.
   * (Lifetime) Once a license is assigned to a SIM, the SIM-Secure feature is enabled for the life
   * of the SIM.“TS-BUNDLE-KTO-SIMSEC-MRC”. (Bundle) The SIM-Secure Flex license can be assigned to
   * or removed from a SIM at any time. This SKU is bundled with other ThingSpace
   * Services.*“SIMSec-IoT”. (Flex) The SIM-Secure Flex license can be assigned to or removed from a
   * SIM at any time. This SKU is purchased a la carte.
   */
  skuNumber?: string;
};

export const securitySubscriptionRequestSchema: Schema<SecuritySubscriptionRequest> =
  s.object<SecuritySubscriptionRequest>({
    accountName: s.optional(s.string()),
    skuNumber: s.optional(s.string()),
  });
