import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type V2DeviceStatus = {
  deviceId: string;
  status: string;
  resultReason?: string;
};

export const v2DeviceStatusSchema: Schema<V2DeviceStatus> = s.object<V2DeviceStatus>({
  deviceId: s.string(),
  status: s.string(),
  resultReason: s.optional(s.string()),
});
