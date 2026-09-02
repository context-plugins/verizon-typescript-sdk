import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type V3DeviceStatus = {
  deviceId: string;
  status: string;
  resultReason?: string;
  updatedTime?: Date;
  recentAttemptTime?: Date;
  nextAttemptTime?: Date;
};

export const v3DeviceStatusSchema: Schema<V3DeviceStatus> = s.object<V3DeviceStatus>({
  deviceId: s.string(),
  status: s.string(),
  resultReason: s.optional(s.string()),
  updatedTime: s.optional(s.dateTime()),
  recentAttemptTime: s.optional(s.dateTime()),
  nextAttemptTime: s.optional(s.dateTime()),
});
