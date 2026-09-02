import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AnomalyDetectionTrigger = {
  triggerId?: string;
};

export const anomalyDetectionTriggerSchema: Schema<AnomalyDetectionTrigger> =
  s.object<AnomalyDetectionTrigger>({
    triggerId: s.optional(s.string()),
  });
