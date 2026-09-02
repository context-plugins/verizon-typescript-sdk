import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { anomalyTriggerValueSchema, type AnomalyTriggerValue } from "../anomaly-trigger-value.js";
import { triggerType2Schema, type TriggerType2 } from "../trigger-type2.js";

export type TriggersListOptions = AnomalyTriggerValue | TriggerType2;

export const triggersListOptionsSchema: Schema<TriggersListOptions> = s.of<TriggersListOptions>(
  s.union([s.lazy(() => anomalyTriggerValueSchema), s.lazy(() => triggerType2Schema)]),
);
