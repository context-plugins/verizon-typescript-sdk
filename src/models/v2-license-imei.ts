import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** IMEIs of the devices to assign or remove licenses. */
export type V2LicenseImei = {
  /** Account name. */
  accountName?: string;
  /** Device IMEI list. */
  deviceList: string[];
};

export const v2LicenseImeiSchema: Schema<V2LicenseImei> = s.object<V2LicenseImei>({
  accountName: s.optional(s.string()),
  deviceList: s.array(s.string()),
});
