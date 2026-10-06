import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Trigger for anomaly detection. */
export type AnomalyDetectionTrigger = {
  /** Trigger ID to identify the request in a callback. */
  triggerId?: string;
};

export const anomalyDetectionTriggerSchema: Schema<AnomalyDetectionTrigger> =
  s.object<AnomalyDetectionTrigger>({
    triggerId: s.optional(s.string()),
  });
