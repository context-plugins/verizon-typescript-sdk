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
  action?: AccountLevelAction;
  conditionType?: ConditionType;
  comparitor?: Comparitor;
  threshold?: number;
  thresholdUnit?: ThresholdUnit;
  cycleType?: RulesCycleType;
  allowanceThreshold?: AllowanceThreshold;
};

export const dataTrigger1Schema: Schema<DataTrigger1> = s.object<DataTrigger1>({
  filterCriteria: s.optional(s.lazy(() => accountLevelFilterSchema)),
  condition: s.optional(s.lazy(() => accountLevelObjectconditionSchema)),
  action: s.optional(s.lazy(() => accountLevelActionSchema)),
  conditionType: s.optional(s.lazy(() => conditionTypeSchema)),
  comparitor: s.optional(s.lazy(() => comparitorSchema)),
  threshold: s.optional(s.number()),
  thresholdUnit: s.optional(s.lazy(() => thresholdUnitSchema)),
  cycleType: s.optional(s.lazy(() => rulesCycleTypeSchema)),
  allowanceThreshold: s.optional(s.lazy(() => allowanceThresholdSchema)),
});
