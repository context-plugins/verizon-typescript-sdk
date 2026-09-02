import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { actionobjectSchema, type Actionobject } from "./actionobject.js";
import { allowanceThresholdSchema, type AllowanceThreshold } from "./allowance-threshold.js";
import { comparitorSchema, type Comparitor } from "./comparitor.js";
import { conditionTypeSchema, type ConditionType } from "./condition-type.js";
import {
  deviceGroupFilterCriteriaSchema,
  type DeviceGroupFilterCriteria,
} from "./device-group-filter-criteria.js";
import { rulesCycleTypeSchema, type RulesCycleType } from "./rules-cycle-type.js";
import { thresholdUnitSchema, type ThresholdUnit } from "./threshold-unit.js";

export type DataTrigger2 = {
  deviceGroup?: DeviceGroupFilterCriteria;
  conditionType?: ConditionType;
  comparitor?: Comparitor;
  threshold?: number;
  thresholdUnit?: ThresholdUnit;
  cycleType?: RulesCycleType;
  allowanceThreshold?: AllowanceThreshold;
  action?: Actionobject;
};

export const dataTrigger2Schema: Schema<DataTrigger2> = s.object<DataTrigger2>({
  deviceGroup: s.optional(s.lazy(() => deviceGroupFilterCriteriaSchema)),
  conditionType: s.optional(s.lazy(() => conditionTypeSchema)),
  comparitor: s.optional(s.lazy(() => comparitorSchema)),
  threshold: s.optional(s.number()),
  thresholdUnit: s.optional(s.lazy(() => thresholdUnitSchema)),
  cycleType: s.optional(s.lazy(() => rulesCycleTypeSchema)),
  allowanceThreshold: s.optional(s.lazy(() => allowanceThresholdSchema)),
  action: s.optional(s.lazy(() => actionobjectSchema)),
});
