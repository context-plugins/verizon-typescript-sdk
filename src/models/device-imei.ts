import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Device IMEI list. */
export type DeviceImei = {
  /** Device IMEI list. */
  deviceList: string[];
};

export const deviceImeiSchema: Schema<DeviceImei> = s.object<DeviceImei>({
  deviceList: s.array(s.string()),
});
