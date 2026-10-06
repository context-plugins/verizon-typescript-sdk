import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { anomalyTriggerRequestSchema, type AnomalyTriggerRequest } from "./anomaly-trigger-request.js";
import { triggerNotificationSchema, type TriggerNotification } from "./trigger-notification.js";

/** Trigger details. */
export type TriggerType3 = {
  /** Trigger ID. */
  triggerId?: string;
  /** Trigger name. */
  triggerName?: string;
  /**
   * This is the value to use in the request body to detect anomalous behaivior. The values in this
   * table will only be relevant when this parameter is set to this value.
   */
  triggerCategory?: string;
  /** Account name. */
  accountName?: string;
  /** The details of the UsageAnomaly trigger. */
  anomalyTriggerRequest?: AnomalyTriggerRequest;
  /** The notification details of the trigger. */
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
