import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { v2LicenseDeviceSchema, type V2LicenseDevice } from "./v2-license-device.js";

/** Summary of license assignment. */
export type V2LicenseSummary = {
  /** Account identifier. */
  accountName: string;
  /** Total FOTA license count. */
  totalLicense?: number;
  /** Assigned FOTA license count. */
  assignedLicenses: number;
  /** True if there are more devices to retrieve. */
  hasMoreData: boolean;
  /** Last seen device identifier. */
  lastSeenDeviceId?: string;
  /** Maximum page size. */
  maxPageSize: number;
  /** Device IMEI list. */
  deviceList?: V2LicenseDevice[];
};

export const v2LicenseSummarySchema: Schema<V2LicenseSummary> = s.object<V2LicenseSummary>({
  accountName: s.string(),
  totalLicense: s.optional(s.int()),
  assignedLicenses: s.int(),
  hasMoreData: s.boolean(),
  lastSeenDeviceId: s.optional(s.string()),
  maxPageSize: s.int(),
  deviceList: s.optional(s.array(s.lazy(() => v2LicenseDeviceSchema))),
});
