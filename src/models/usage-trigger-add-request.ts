import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { ServiceName, serviceNameSchema } from "./service-name.js";

export type UsageTriggerAddRequest = {
  /** Usage trigger name */
  triggerName?: string;
  /** Account name */
  accountName: string;
  /** Service name @default ServiceName.Location */
  serviceName?: ServiceName;
  /** The percent of subscribed usage required to activate the trigger, such as 90 or 100. */
  thresholdValue: string;
  /** Allow additional requests after thresholdValue is reached. (currently not functional) */
  allowExcess?: boolean;
  /** Send SMS (text) alerts when the thresholdValue is reached. */
  sendSmsNotification?: boolean;
  /**
   * Comma-separated list of phone numbers to send SMS alerts to. Digits only; no dashes or
   * parentheses, etc.
   */
  smsPhoneNumbers?: string;
  /** Send email alerts when the thresholdValue is reached. */
  sendEmailNotification?: boolean;
  /** Comma-separated list of email addresses to send alerts to. */
  emailAddresses?: string;
};

export const usageTriggerAddRequestSchema: Schema<UsageTriggerAddRequest> = s.object<UsageTriggerAddRequest>({
  triggerName: s.optional(s.string()),
  accountName: s.string(),
  serviceName: s.defaulted(serviceNameSchema, ServiceName.Location),
  thresholdValue: s.string(),
  allowExcess: s.optional(s.boolean()),
  sendSmsNotification: s.optional(s.boolean()),
  smsPhoneNumbers: s.optional(s.string()),
  sendEmailNotification: s.optional(s.boolean()),
  emailAddresses: s.optional(s.string()),
});
