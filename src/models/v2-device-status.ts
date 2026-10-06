import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Device with id in IMEI. */
export type V2DeviceStatus = {
  /** Device IMEI. */
  deviceId: string;
  /** Success or failure. */
  status: string;
  /** Result reason. */
  resultReason?: string;
};

export const v2DeviceStatusSchema: Schema<V2DeviceStatus> = s.object<V2DeviceStatus>({
  deviceId: s.string(),
  status: s.string(),
  resultReason: s.optional(s.string()),
});
