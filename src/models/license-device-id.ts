import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Id of the devices. */
export type LicenseDeviceId = {
  /**
   * For 4G devices, IMEI (decimal, up to 15 digits) for unassign and ICCID (decimal, up to 20
   * digits) for assign.
   */
  id?: string;
  /**
   * For 4G devices, ICCID (decimal, up to 20 digits) for unassign and IMEI (decimal, up to 15
   * digits) for assign.
   */
  kind?: string;
};

export const licenseDeviceIdSchema: Schema<LicenseDeviceId> = s.object<LicenseDeviceId>({
  id: s.optional(s.string()),
  kind: s.optional(s.string()),
});
