import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { smsMessageSchema, type SmsMessage } from "./sms-message.js";

/** Response to SMS messages sent by all M2M devices associated with a billing account. */
export type SmsMessagesQueryResult = {
  /**
   * False for a status 200 response.True for a status 202 response, indicating that there is more
   * data to be retrieved.
   */
  hasMoreData?: boolean;
  /** An array of up to 100 SMS messages that were sent by devices in the account. */
  messages?: SmsMessage[];
};

export const smsMessagesQueryResultSchema: Schema<SmsMessagesQueryResult> = s.object<SmsMessagesQueryResult>({
  hasMoreData: s.optional(s.boolean()),
  messages: s.optional(s.array(s.lazy(() => smsMessageSchema))),
});
