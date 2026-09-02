import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { deviceIdSchema, type DeviceId } from "./device-id.js";

export type SmsMessage = {
  deviceIds?: DeviceId[];
  message?: string;
  timestamp?: string;
};

export const smsMessageSchema: Schema<SmsMessage> = s.object<SmsMessage>({
  deviceIds: s.optional(s.array(s.lazy(() => deviceIdSchema))),
  message: s.optional(s.string()),
  timestamp: s.optional(s.string()),
});
