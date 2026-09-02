import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { activeAnomalyIndicatorSchema, type ActiveAnomalyIndicator } from "../active-anomaly-indicator.js";
import { triggerType3Schema, type TriggerType3 } from "../trigger-type3.js";

export type UpdateTriggerRequestOptions = TriggerType3 | ActiveAnomalyIndicator;

export const updateTriggerRequestOptionsSchema: Schema<UpdateTriggerRequestOptions> =
  s.of<UpdateTriggerRequestOptions>(
    s.union([s.lazy(() => triggerType3Schema), s.lazy(() => activeAnomalyIndicatorSchema)]),
  );
