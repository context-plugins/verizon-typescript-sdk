import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { triggersListOptionsSchema, type TriggersListOptions } from "./unions/triggers-list-options.js";

export type AnomalyTriggerResult = {
  triggers?: TriggersListOptions[];
};

export const anomalyTriggerResultSchema: Schema<AnomalyTriggerResult> = s.object<AnomalyTriggerResult>({
  triggers: s.optional(s.array(s.lazy(() => triggersListOptionsSchema))),
});
