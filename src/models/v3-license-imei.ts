import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type V3LicenseImei = {
  deviceList: string[];
};

export const v3LicenseImeiSchema: Schema<V3LicenseImei> = s.object<V3LicenseImei>({
  deviceList: s.array(s.string()),
});
