import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { gioSmsMessageSchema, type GioSmsMessage } from "./gio-sms-message.js";

export type SmsMessagesResponse = {
  messages?: GioSmsMessage[];
  hasMoreData?: boolean;
};

export const smsMessagesResponseSchema: Schema<SmsMessagesResponse> = s.object<SmsMessagesResponse>({
  messages: s.optional(s.array(s.lazy(() => gioSmsMessageSchema))),
  hasMoreData: s.optional(s.boolean()),
});
