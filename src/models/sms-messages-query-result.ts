import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { smsMessageSchema, type SmsMessage } from "./sms-message.js";

export type SmsMessagesQueryResult = {
  hasMoreData?: boolean;
  messages?: SmsMessage[];
};

export const smsMessagesQueryResultSchema: Schema<SmsMessagesQueryResult> = s.object<SmsMessagesQueryResult>({
  hasMoreData: s.optional(s.boolean()),
  messages: s.optional(s.array(s.lazy(() => smsMessageSchema))),
});
