import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type V2LicenseDevice = {
  deviceId: string;
  assignmentTime?: string;
};

export const v2LicenseDeviceSchema: Schema<V2LicenseDevice> = s.object<V2LicenseDevice>({
  deviceId: s.string(),
  assignmentTime: s.optional(s.string()),
});
