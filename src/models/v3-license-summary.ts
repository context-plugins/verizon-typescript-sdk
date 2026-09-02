import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { v3LicenseDeviceSchema, type V3LicenseDevice } from "./v3-license-device.js";

export type V3LicenseSummary = {
  accountName: string;
  totalLicenses?: number;
  assignedLicenses: number;
  hasMoreData: boolean;
  lastSeenDeviceId?: string;
  maxPageSize: number;
  deviceList?: V3LicenseDevice[];
};

export const v3LicenseSummarySchema: Schema<V3LicenseSummary> = s.object<V3LicenseSummary>({
  accountName: s.string(),
  totalLicenses: s.optional(s.number()),
  assignedLicenses: s.number(),
  hasMoreData: s.boolean(),
  lastSeenDeviceId: s.optional(s.string()),
  maxPageSize: s.number(),
  deviceList: s.optional(s.array(s.lazy(() => v3LicenseDeviceSchema))),
});
