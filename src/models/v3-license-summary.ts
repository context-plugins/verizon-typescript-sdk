import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { v3LicenseDeviceSchema, type V3LicenseDevice } from "./v3-license-device.js";

/** Information for FOTA licenses assigned to devices. */
export type V3LicenseSummary = {
  /** Account identifier. */
  accountName: string;
  /** Total FOTA license count. */
  totalLicenses?: number;
  /** Assigned FOTA license count. */
  assignedLicenses: number;
  /** True if there are more devices to retrieve. */
  hasMoreData: boolean;
  /** Last seen device identifier. */
  lastSeenDeviceId?: string;
  /** Maximum page size. */
  maxPageSize: number;
  /** Device IMEI list. */
  deviceList?: V3LicenseDevice[];
};

export const v3LicenseSummarySchema: Schema<V3LicenseSummary> = s.object<V3LicenseSummary>({
  accountName: s.string(),
  totalLicenses: s.optional(s.int()),
  assignedLicenses: s.int(),
  hasMoreData: s.boolean(),
  lastSeenDeviceId: s.optional(s.string()),
  maxPageSize: s.int(),
  deviceList: s.optional(s.array(s.lazy(() => v3LicenseDeviceSchema))),
});
