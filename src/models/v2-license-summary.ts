import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { v2LicenseDeviceSchema, type V2LicenseDevice } from "./v2-license-device.js";

export type V2LicenseSummary = {
  accountName: string;
  totalLicense?: number;
  assignedLicenses: number;
  hasMoreData: boolean;
  lastSeenDeviceId?: string;
  maxPageSize: number;
  deviceList?: V2LicenseDevice[];
};

export const v2LicenseSummarySchema: Schema<V2LicenseSummary> = s.object<V2LicenseSummary>({
  accountName: s.string(),
  totalLicense: s.optional(s.number()),
  assignedLicenses: s.number(),
  hasMoreData: s.boolean(),
  lastSeenDeviceId: s.optional(s.string()),
  maxPageSize: s.number(),
  deviceList: s.optional(s.array(s.lazy(() => v2LicenseDeviceSchema))),
});
