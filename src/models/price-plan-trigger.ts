import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { actionobjectSchema, type Actionobject } from "./actionobject.js";
import {
  filtercriteriaObjectCallSchema,
  type FiltercriteriaObjectCall,
} from "./filtercriteria-object-call.js";
import {
  pricePlanTriggerConditionSchema,
  type PricePlanTriggerCondition,
} from "./unions/price-plan-trigger-condition.js";

export type PricePlanTrigger = {
  standAlone?: FiltercriteriaObjectCall;
  condition?: PricePlanTriggerCondition;
  action?: Actionobject;
};

export const pricePlanTriggerSchema: Schema<PricePlanTrigger> = s.object<PricePlanTrigger>({
  standAlone: s.optional(s.lazy(() => filtercriteriaObjectCallSchema)),
  condition: s.optional(s.lazy(() => pricePlanTriggerConditionSchema)),
  action: s.optional(s.lazy(() => actionobjectSchema)),
});
