import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { deviceIdSchema, type DeviceId } from "./device-id.js";

/** SMS messages sent by all M2M devices associated with a billing account. */
export type SmsMessage = {
  /** One or more IDs of the device that sent the message. */
  deviceIds?: DeviceId[];
  /** The contents of the SMS message. */
  message?: string;
  /** The date and time that the message was received by the Verizon ThingSpace Platform. */
  timestamp?: string;
};

export const smsMessageSchema: Schema<SmsMessage> = s.object<SmsMessage>({
  deviceIds: s.optional(s.array(s.lazy(() => deviceIdSchema))),
  message: s.optional(s.string()),
  timestamp: s.optional(s.string()),
});
