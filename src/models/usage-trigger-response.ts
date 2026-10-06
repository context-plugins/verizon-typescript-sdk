import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { ServiceName, serviceNameSchema } from "./service-name.js";

export type UsageTriggerResponse = {
  /** Unique usage triggerId */
  triggerId: string;
  /** Usage trigger name */
  triggerName: string;
  /** Account name */
  accountName: string;
  /** Service name @default ServiceName.Location */
  serviceName?: ServiceName;
  /** Percent of subscription at which trigger will send an alert */
  thresholdValue: string;
  /** allowExcess determines whether to restrict usage after exceeds limits */
  allowExcess: boolean;
  /** Send SMS (text) alerts when the thresholdValue is reached. */
  sendSmsNotification: boolean;
  /** comma seperated value of list of Phone numbers for SMS notifications */
  smsPhoneNumbers: string;
  /** Send email alerts when the thresholdValue is reached. */
  sendEmailNotification: boolean;
  /** comma seperated value of list of Email addresses for Email notifications */
  emailAddresses: string;
  /** UTC Date when the usage trigger was created */
  createDate: string;
  /** UTC Date when the usage trigger was last updated */
  updateDate: string;
};

export const usageTriggerResponseSchema: Schema<UsageTriggerResponse> = s.object<UsageTriggerResponse>({
  triggerId: s.string(),
  triggerName: s.string(),
  accountName: s.string(),
  serviceName: s.defaulted(serviceNameSchema, ServiceName.Location),
  thresholdValue: s.string(),
  allowExcess: s.boolean(),
  sendSmsNotification: s.boolean(),
  smsPhoneNumbers: s.string(),
  sendEmailNotification: s.boolean(),
  emailAddresses: s.string(),
  createDate: s.string(),
  updateDate: s.string(),
});
