import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { activeAnomalyIndicatorSchema, type ActiveAnomalyIndicator } from "../active-anomaly-indicator.js";
import { activeTriggerIndicatorSchema, type ActiveTriggerIndicator } from "../active-trigger-indicator.js";
import { triggerType1Schema, type TriggerType1 } from "../trigger-type1.js";

export type CreateTriggerRequestOptions = TriggerType1 | ActiveAnomalyIndicator | ActiveTriggerIndicator;

export const createTriggerRequestOptionsSchema: Schema<CreateTriggerRequestOptions> =
  s.of<CreateTriggerRequestOptions>(
    s.union([
      s.lazy(() => triggerType1Schema),
      s.lazy(() => activeAnomalyIndicatorSchema),
      s.lazy(() => activeTriggerIndicatorSchema),
    ]),
  );
