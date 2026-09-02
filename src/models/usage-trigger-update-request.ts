import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type UsageTriggerUpdateRequest = {
  triggerName?: string;
  accountName: string;
  thresholdValue?: string;
  smsPhoneNumbers?: string;
  emailAddresses?: string;
};

export const usageTriggerUpdateRequestSchema: Schema<UsageTriggerUpdateRequest> =
  s.object<UsageTriggerUpdateRequest>({
    triggerName: s.optional(s.string()),
    accountName: s.string(),
    thresholdValue: s.optional(s.string()),
    smsPhoneNumbers: s.optional(s.string()),
    emailAddresses: s.optional(s.string()),
  });
