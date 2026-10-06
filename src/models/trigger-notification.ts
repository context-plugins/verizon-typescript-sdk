import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { smsNumberSchema, type SmsNumber } from "./sms-number.js";

/** The notification details of the trigger. */
export type TriggerNotification = {
  /** The type of notification, i.e. 'DailySummary'. */
  notificationType?: string;
  /** Whether or not the notification should be sent via callback.<br />true<br />false. */
  callback?: boolean;
  /** Whether or not the notification should be sent via e-mail.<br />true<br />false. */
  emailNotification?: boolean;
  /** Name for the notification group. */
  notificationGroupName?: string;
  /** Frequency factor for notification. */
  notificationFrequencyFactor?: number;
  /** Frequency interval for notification. */
  notificationFrequencyInterval?: string;
  /** E-mail address(es) where the notification should be delivered. */
  externalEmailRecipients?: string;
  /** SMS notification. */
  smsNotification?: boolean;
  /** List of SMS numbers. */
  smsNumbers?: SmsNumber[];
  reminder?: boolean;
  /**
   * Severity level associated with the notification. Examples would be:<br />Major<br />Minor<br
   * />Critical<br />NotApplicable.
   */
  severity?: string;
};

export const triggerNotificationSchema: Schema<TriggerNotification> = s.object<TriggerNotification>({
  notificationType: s.optional(s.string()),
  callback: s.optional(s.boolean()),
  emailNotification: s.optional(s.boolean()),
  notificationGroupName: s.optional(s.string()),
  notificationFrequencyFactor: s.optional(s.int()),
  notificationFrequencyInterval: s.optional(s.string()),
  externalEmailRecipients: s.optional(s.string()),
  smsNotification: s.optional(s.boolean()),
  smsNumbers: s.optional(s.array(s.lazy(() => smsNumberSchema))),
  reminder: s.optional(s.boolean()),
  severity: s.optional(s.string()),
});
