import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { triggersListOptionsSchema, type TriggersListOptions } from "./unions/triggers-list-options.js";

/** A result containing a list of anomaly triggers. */
export type AnomalyTriggerResult = {
  /** Trigger value chunk details. */
  triggers?: TriggersListOptions[];
};

export const anomalyTriggerResultSchema: Schema<AnomalyTriggerResult> = s.object<AnomalyTriggerResult>({
  triggers: s.optional(s.array(s.lazy(() => triggersListOptionsSchema))),
});
