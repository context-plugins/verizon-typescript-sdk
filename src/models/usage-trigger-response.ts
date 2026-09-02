import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { serviceNameSchema, type ServiceName } from "./service-name.js";

export type UsageTriggerResponse = {
  triggerId: string;
  triggerName: string;
  accountName: string;
  serviceName: ServiceName;
  thresholdValue: string;
  allowExcess: boolean;
  sendSmsNotification: boolean;
  smsPhoneNumbers: string;
  sendEmailNotification: boolean;
  emailAddresses: string;
  createDate: string;
  updateDate: string;
};

export const usageTriggerResponseSchema: Schema<UsageTriggerResponse> = s.object<UsageTriggerResponse>({
  triggerId: s.string(),
  triggerName: s.string(),
  accountName: s.string(),
  serviceName: serviceNameSchema,
  thresholdValue: s.string(),
  allowExcess: s.boolean(),
  sendSmsNotification: s.boolean(),
  smsPhoneNumbers: s.string(),
  sendEmailNotification: s.boolean(),
  emailAddresses: s.string(),
  createDate: s.string(),
  updateDate: s.string(),
});
