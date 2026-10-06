import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { licenseDeviceIdSchema, type LicenseDeviceId } from "./license-device-id.js";

/** List of all devices. */
export type LicenseDeviceList = {
  /** For 4G devices, IMEI (decimal, up to 15 digits). */
  deviceIds?: LicenseDeviceId[];
  ipAddress?: string;
};

export const licenseDeviceListSchema: Schema<LicenseDeviceList> = s.object<LicenseDeviceList>({
  deviceIds: s.optional(s.array(s.lazy(() => licenseDeviceIdSchema))),
  ipAddress: s.optional(s.string()),
});
