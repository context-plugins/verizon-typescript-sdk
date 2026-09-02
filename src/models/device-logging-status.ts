import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DeviceLoggingStatus = {
  deviceId: string;
  expiryDate: string;
};

export const deviceLoggingStatusSchema: Schema<DeviceLoggingStatus> = s.object<DeviceLoggingStatus>({
  deviceId: s.string(),
  expiryDate: s.dateOnly(),
});
