import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { triggerNotificationSchema, type TriggerNotification } from "./trigger-notification.js";
import { usageAnomalyAttributesSchema, type UsageAnomalyAttributes } from "./usage-anomaly-attributes.js";

export type TriggerType2 = {
  anomalyattributes?: UsageAnomalyAttributes;
  notification?: TriggerNotification;
};

export const triggerType2Schema: Schema<TriggerType2> = s.object<TriggerType2>({
  anomalyattributes: s.optional(s.lazy(() => usageAnomalyAttributesSchema)),
  notification: s.optional(s.lazy(() => triggerNotificationSchema)),
});
