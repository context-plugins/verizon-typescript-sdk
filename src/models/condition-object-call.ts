import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { allowanceThresholdSchema, type AllowanceThreshold } from "./allowance-threshold.js";
import { comparitorSchema, type Comparitor } from "./comparitor.js";
import { conditionTypeSchema, type ConditionType } from "./condition-type.js";
import { rulesCycleTypeSchema, type RulesCycleType } from "./rules-cycle-type.js";
import { thresholdUnitSchema, type ThresholdUnit } from "./threshold-unit.js";

export type ConditionObjectCall = {
  /** The condition type being monitored */
  conditionType?: ConditionType;
  /** The boolean of the comparison. `gt` is Greater Than, `lt` is Less Than and `eq` is Equal To */
  comparitor?: Comparitor;
  /** The threshold value the trigger monitors for */
  threshold?: number;
  /** The units of the threshold. This can be KB, Kilobits, MB, Megabits, or GB, Gigabits */
  thresholdUnit?: ThresholdUnit;
  /** The interval to monitor for the threshold. This can be Daily, Weekly or Monthly */
  cycleType?: RulesCycleType;
  allowanceThreshold?: AllowanceThreshold;
};

export const conditionObjectCallSchema: Schema<ConditionObjectCall> = s.object<ConditionObjectCall>({
  conditionType: s.optional(s.lazy(() => conditionTypeSchema)),
  comparitor: s.optional(s.lazy(() => comparitorSchema)),
  threshold: s.optional(s.int()),
  thresholdUnit: s.optional(s.lazy(() => thresholdUnitSchema)),
  cycleType: s.optional(s.lazy(() => rulesCycleTypeSchema)),
  allowanceThreshold: s.optional(s.lazy(() => allowanceThresholdSchema)),
});
