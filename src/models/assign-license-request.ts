import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { licenseDeviceListSchema, type LicenseDeviceList } from "./license-device-list.js";

/** Request to assign license. */
export type AssignLicenseRequest = {
  /**
   * The name of a billing account.This parameter is required only if the UWS account used for the
   * current API session has access to multiple accounts. An account name is usually numeric, and
   * must include any leading zeros.
   */
  accountName?: string;
  /** A list of 4G devices. */
  devices?: LicenseDeviceList[];
  /**
   * The Stock Keeping Unit (SKU). Valid skuNumbers for license types: “SIMSec-IoT-Lt”. (Lifetime)
   * Once a license is assigned to a SIM, the SIM-Secure feature is enabled for the life of the
   * SIM.“TS-BUNDLE-KTO-SIMSEC-MRC”. (Bundle) The SIM-Secure Flex license can be assigned to or
   * removed from a SIM at any time. This SKU is bundled with other ThingSpace
   * Services.“SIMSec-IoT”. (Flex) The SIM-Secure Flex license can be assigned to or removed from a
   * SIM at any time. This SKU is purchased a la carte.
   */
  skuNumber?: string;
};

export const assignLicenseRequestSchema: Schema<AssignLicenseRequest> = s.object<AssignLicenseRequest>({
  accountName: s.optional(s.string()),
  devices: s.optional(s.array(s.lazy(() => licenseDeviceListSchema))),
  skuNumber: s.optional(s.string()),
});
