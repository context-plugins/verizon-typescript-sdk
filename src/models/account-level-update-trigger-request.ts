import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { activeSchema, type Active } from "./active.js";
import { dataTrigger1Schema, type DataTrigger1 } from "./data-trigger1.js";
import { notificationarraySchema, type Notificationarray } from "./notificationarray.js";
import { triggerCategorySchema, type TriggerCategory } from "./trigger-category.js";
import { smsNumberModelSchema, type SmsNumberModel } from "./unions/sms-number-model.js";

export type AccountLevelUpdateTriggerRequest = {
  triggerId?: string;
  triggerName?: string;
  ecpdId?: string;
  triggerCategory?: TriggerCategory;
  dataTrigger?: DataTrigger1;
  notification?: Notificationarray;
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
  active?: Active;
};

export const accountLevelUpdateTriggerRequestSchema: Schema<AccountLevelUpdateTriggerRequest> =
  s.object<AccountLevelUpdateTriggerRequest>({
    triggerId: s.optional(s.string()),
    triggerName: s.optional(s.string()),
    ecpdId: s.optional(s.string()),
    triggerCategory: s.optional(s.lazy(() => triggerCategorySchema)),
    dataTrigger: s.optional(s.lazy(() => dataTrigger1Schema)),
    notification: s.optional(s.lazy(() => notificationarraySchema)),
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
    active: s.optional(s.lazy(() => activeSchema)),
  });
