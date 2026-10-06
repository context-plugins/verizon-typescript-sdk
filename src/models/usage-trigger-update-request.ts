import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type UsageTriggerUpdateRequest = {
  /** Usage trigger name */
  triggerName?: string;
  /** Account name */
  accountName: string;
  /** The percent of subscribed usage required to activate the trigger, such as 90 or 100. */
  thresholdValue?: string;
  /**
   * Comma-separated list of phone numbers to send SMS alerts to. Digits only; no dashes or
   * parentheses, etc.
   */
  smsPhoneNumbers?: string;
  /** Comma-separated list of email addresses to send alerts to. */
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
