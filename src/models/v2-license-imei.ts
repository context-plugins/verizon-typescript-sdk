import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type V2LicenseImei = {
  accountName?: string;
  deviceList: string[];
};

export const v2LicenseImeiSchema: Schema<V2LicenseImei> = s.object<V2LicenseImei>({
  accountName: s.optional(s.string()),
  deviceList: s.array(s.string()),
});
