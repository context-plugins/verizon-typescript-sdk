import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accountLevelActionSchema, type AccountLevelAction } from "./account-level-action.js";
import { accountLevelFilterSchema, type AccountLevelFilter } from "./account-level-filter.js";
import { allowanceThresholdSchema, type AllowanceThreshold } from "./allowance-threshold.js";
import { comparitorSchema, type Comparitor } from "./comparitor.js";
import { conditionTypeSchema, type ConditionType } from "./condition-type.js";
import { rulesCycleTypeSchema, type RulesCycleType } from "./rules-cycle-type.js";
import { thresholdUnitSchema, type ThresholdUnit } from "./threshold-unit.js";
import {
  accountLevelObjectconditionSchema,
  type AccountLevelObjectcondition,
} from "./unions/account-level-objectcondition.js";

export type DataTrigger1 = {
  filterCriteria?: AccountLevelFilter;
  condition?: AccountLevelObjectcondition;
  /** The action taken when trigger conditions are met */
  action?: AccountLevelAction;
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

export const dataTrigger1Schema: Schema<DataTrigger1> = s.object<DataTrigger1>({
  filterCriteria: s.optional(s.lazy(() => accountLevelFilterSchema)),
  condition: s.optional(s.lazy(() => accountLevelObjectconditionSchema)),
  action: s.optional(s.lazy(() => accountLevelActionSchema)),
  conditionType: s.optional(s.lazy(() => conditionTypeSchema)),
  comparitor: s.optional(s.lazy(() => comparitorSchema)),
  threshold: s.optional(s.int()),
  thresholdUnit: s.optional(s.lazy(() => thresholdUnitSchema)),
  cycleType: s.optional(s.lazy(() => rulesCycleTypeSchema)),
  allowanceThreshold: s.optional(s.lazy(() => allowanceThresholdSchema)),
});
