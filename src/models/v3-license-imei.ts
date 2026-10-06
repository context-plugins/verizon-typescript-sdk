import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** List of devices. */
export type V3LicenseImei = {
  /** Device IMEI list. */
  deviceList: string[];
};

export const v3LicenseImeiSchema: Schema<V3LicenseImei> = s.object<V3LicenseImei>({
  deviceList: s.array(s.string()),
});
