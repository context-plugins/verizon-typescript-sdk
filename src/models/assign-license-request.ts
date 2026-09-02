import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { licenseDeviceListSchema, type LicenseDeviceList } from "./license-device-list.js";

export type AssignLicenseRequest = {
  accountName?: string;
  devices?: LicenseDeviceList[];
  skuNumber?: string;
};

export const assignLicenseRequestSchema: Schema<AssignLicenseRequest> = s.object<AssignLicenseRequest>({
  accountName: s.optional(s.string()),
  devices: s.optional(s.array(s.lazy(() => licenseDeviceListSchema))),
  skuNumber: s.optional(s.string()),
});
