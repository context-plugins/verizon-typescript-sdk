import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { anomalyTriggerRequestSchema, type AnomalyTriggerRequest } from "./anomaly-trigger-request.js";
import { triggerNotificationSchema, type TriggerNotification } from "./trigger-notification.js";

export type TriggerType1 = {
  name?: string;
  triggerCategory?: string;
  accountName?: string;
  anomalyTriggerRequest?: AnomalyTriggerRequest;
  notification?: TriggerNotification;
};

export const triggerType1Schema: Schema<TriggerType1> = s.object<TriggerType1>({
  name: s.optional(s.string()),
  triggerCategory: s.optional(s.string()),
  accountName: s.optional(s.string()),
  anomalyTriggerRequest: s.optional(s.lazy(() => anomalyTriggerRequestSchema)),
  notification: s.optional(s.lazy(() => triggerNotificationSchema)),
});
