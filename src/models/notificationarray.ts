import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { smsNumberModelSchema, type SmsNumberModel } from "./unions/sms-number-model.js";

export type Notificationarray = {
  notificationType?: string;
  callback?: boolean;
  emailNotification?: boolean;
  notificationGroupName?: string;
  notificationFrequencyFactor?: number;
  notificationFrequencyInterval?: string;
  externalEmailRecipients?: string;
  smsNotification?: boolean;
  smsNumbers?: SmsNumberModel[];
  reminder?: boolean;
  severity?: string;
};

export const notificationarraySchema: Schema<Notificationarray> = s.object<Notificationarray>({
  notificationType: s.optional(s.string()),
  callback: s.optional(s.boolean()),
  emailNotification: s.optional(s.boolean()),
  notificationGroupName: s.optional(s.string()),
  notificationFrequencyFactor: s.optional(s.number()),
  notificationFrequencyInterval: s.optional(s.string()),
  externalEmailRecipients: s.optional(s.string()),
  smsNotification: s.optional(s.boolean()),
  smsNumbers: s.optional(s.array(s.lazy(() => smsNumberModelSchema))),
  reminder: s.optional(s.boolean()),
  severity: s.optional(s.string()),
});
