import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Device and firmware information. */
export type DeviceFirmwareVersion = {
  status?: string;
  reason?: string;
  /** Device IMEI. */
  deviceId: string;
  /** Device Firmware Version. */
  firmwareVersion: string;
  firmwareVersionUpdateTime?: Date;
};

export const deviceFirmwareVersionSchema: Schema<DeviceFirmwareVersion> = s.object<DeviceFirmwareVersion>({
  status: s.optional(s.string()),
  reason: s.optional(s.string()),
  deviceId: s.string(),
  firmwareVersion: s.string(),
  firmwareVersionUpdateTime: s.optional(s.dateTime()),
});
