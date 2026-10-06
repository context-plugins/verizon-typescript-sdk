import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Device status. */
export type V3DeviceStatus = {
  /** Device IMEI. */
  deviceId: string;
  /** Success or failure. */
  status: string;
  /** Result reason. */
  resultReason?: string;
  /** Updated Time. */
  updatedTime?: Date;
  /** The most recent attempt time. */
  recentAttemptTime?: Date;
  /** Next attempt time. */
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
