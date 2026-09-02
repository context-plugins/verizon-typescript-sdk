import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { conditionObjectCallSchema, type ConditionObjectCall } from "../condition-object-call.js";
import { conditionTypeSchema, type ConditionType } from "../condition-type.js";

export type PayAsYouGoPricePlanTriggerCondition = ConditionType | ConditionObjectCall;

export const payAsYouGoPricePlanTriggerConditionSchema: Schema<PayAsYouGoPricePlanTriggerCondition> =
  s.of<PayAsYouGoPricePlanTriggerCondition>(
    s.union([s.lazy(() => conditionTypeSchema), s.lazy(() => conditionObjectCallSchema)]),
  );
