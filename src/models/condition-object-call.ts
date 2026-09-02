import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { allowanceThresholdSchema, type AllowanceThreshold } from "./allowance-threshold.js";
import { comparitorSchema, type Comparitor } from "./comparitor.js";
import { conditionTypeSchema, type ConditionType } from "./condition-type.js";
import { rulesCycleTypeSchema, type RulesCycleType } from "./rules-cycle-type.js";
import { thresholdUnitSchema, type ThresholdUnit } from "./threshold-unit.js";

export type ConditionObjectCall = {
  conditionType?: ConditionType;
  comparitor?: Comparitor;
  threshold?: number;
  thresholdUnit?: ThresholdUnit;
  cycleType?: RulesCycleType;
  allowanceThreshold?: AllowanceThreshold;
};

export const conditionObjectCallSchema: Schema<ConditionObjectCall> = s.object<ConditionObjectCall>({
  conditionType: s.optional(s.lazy(() => conditionTypeSchema)),
  comparitor: s.optional(s.lazy(() => comparitorSchema)),
  threshold: s.optional(s.number()),
  thresholdUnit: s.optional(s.lazy(() => thresholdUnitSchema)),
  cycleType: s.optional(s.lazy(() => rulesCycleTypeSchema)),
  allowanceThreshold: s.optional(s.lazy(() => allowanceThresholdSchema)),
});
