import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { activeAnomalyIndicatorSchema, type ActiveAnomalyIndicator } from "../active-anomaly-indicator.js";
import { triggerType3Schema, type TriggerType3 } from "../trigger-type3.js";

export type UpdateV2TriggerRequest = TriggerType3 | ActiveAnomalyIndicator;

export const updateV2TriggerRequestSchema: Schema<UpdateV2TriggerRequest> = s.of<UpdateV2TriggerRequest>(
  s.union([s.lazy(() => triggerType3Schema), s.lazy(() => activeAnomalyIndicatorSchema)]),
);
