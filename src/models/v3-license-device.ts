import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Device IMEI. */
export type V3LicenseDevice = {
  /** Device IMEI. */
  deviceId: string;
  /** License assignment time. */
  assignmentTime?: string;
};

export const v3LicenseDeviceSchema: Schema<V3LicenseDevice> = s.object<V3LicenseDevice>({
  deviceId: s.string(),
  assignmentTime: s.optional(s.string()),
});
