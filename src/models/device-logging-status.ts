import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Device logging status information. */
export type DeviceLoggingStatus = {
  /** Device IMEI. */
  deviceId: string;
  /** The date when device logging expires. */
  expiryDate: string;
};

export const deviceLoggingStatusSchema: Schema<DeviceLoggingStatus> = s.object<DeviceLoggingStatus>({
  deviceId: s.string(),
  expiryDate: s.dateOnly(),
});
