import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type LicenseDeviceId = {
  id?: string;
  kind?: string;
};

export const licenseDeviceIdSchema: Schema<LicenseDeviceId> = s.object<LicenseDeviceId>({
  id: s.optional(s.string()),
  kind: s.optional(s.string()),
});
