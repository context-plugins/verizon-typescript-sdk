import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SmsOptionsSendRequest = {
  servicePlan?: string;
  smsMessage?: string;
};

export const smsOptionsSendRequestSchema: Schema<SmsOptionsSendRequest> = s.object<SmsOptionsSendRequest>({
  servicePlan: s.optional(s.string()),
  smsMessage: s.optional(s.string()),
});
