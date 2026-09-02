import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { anomalyTriggerRequestSchema, type AnomalyTriggerRequest } from "./anomaly-trigger-request.js";
import { triggerNotificationSchema, type TriggerNotification } from "./trigger-notification.js";

export type TriggerType3 = {
  triggerId?: string;
  triggerName?: string;
  triggerCategory?: string;
  accountName?: string;
  anomalyTriggerRequest?: AnomalyTriggerRequest;
  notification?: TriggerNotification;
};

export const triggerType3Schema: Schema<TriggerType3> = s.object<TriggerType3>({
  triggerId: s.optional(s.string()),
  triggerName: s.optional(s.string()),
  triggerCategory: s.optional(s.string()),
  accountName: s.optional(s.string()),
  anomalyTriggerRequest: s.optional(s.lazy(() => anomalyTriggerRequestSchema)),
  notification: s.optional(s.lazy(() => triggerNotificationSchema)),
});
