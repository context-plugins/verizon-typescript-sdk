import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Whether the anomaly detection is active or not. */
export type ActiveAnomalyIndicator = {
  /**
   * Indicates anomaly detection is active<br />True - Anomaly detection is active.<br />False -
   * Anomaly detection is not active.
   */
  active?: boolean;
};

export const activeAnomalyIndicatorSchema: Schema<ActiveAnomalyIndicator> = s.object<ActiveAnomalyIndicator>({
  active: s.optional(s.boolean()),
});
