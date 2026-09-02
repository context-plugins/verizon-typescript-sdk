import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { serviceNameSchema, type ServiceName } from "./service-name.js";

export type UsageTriggerAddRequest = {
  triggerName?: string;
  accountName: string;
  serviceName: ServiceName;
  thresholdValue: string;
  allowExcess?: boolean;
  sendSmsNotification?: boolean;
  smsPhoneNumbers?: string;
  sendEmailNotification?: boolean;
  emailAddresses?: string;
};

export const usageTriggerAddRequestSchema: Schema<UsageTriggerAddRequest> = s.object<UsageTriggerAddRequest>({
  triggerName: s.optional(s.string()),
  accountName: s.string(),
  serviceName: serviceNameSchema,
  thresholdValue: s.string(),
  allowExcess: s.optional(s.boolean()),
  sendSmsNotification: s.optional(s.boolean()),
  smsPhoneNumbers: s.optional(s.string()),
  sendEmailNotification: s.optional(s.boolean()),
  emailAddresses: s.optional(s.string()),
});
