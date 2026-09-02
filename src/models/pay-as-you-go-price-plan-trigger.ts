import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { actionobjectSchema, type Actionobject } from "./actionobject.js";
import {
  payAsYouGoFilterCriteriaSchema,
  type PayAsYouGoFilterCriteria,
} from "./pay-as-you-go-filter-criteria.js";
import {
  payAsYouGoPricePlanTriggerConditionSchema,
  type PayAsYouGoPricePlanTriggerCondition,
} from "./unions/pay-as-you-go-price-plan-trigger-condition.js";

export type PayAsYouGoPricePlanTrigger = {
  payAsYouGo?: PayAsYouGoFilterCriteria;
  condition?: PayAsYouGoPricePlanTriggerCondition;
  action?: Actionobject;
};

export const payAsYouGoPricePlanTriggerSchema: Schema<PayAsYouGoPricePlanTrigger> =
  s.object<PayAsYouGoPricePlanTrigger>({
    payAsYouGo: s.optional(s.lazy(() => payAsYouGoFilterCriteriaSchema)),
    condition: s.optional(s.lazy(() => payAsYouGoPricePlanTriggerConditionSchema)),
    action: s.optional(s.lazy(() => actionobjectSchema)),
  });
