import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  accountShareFilterCriteriaSchema,
  type AccountShareFilterCriteria,
} from "./account-share-filter-criteria.js";
import { changePlanDetailsSchema, type ChangePlanDetails } from "./change-plan-details.js";
import {
  accountSharePricePlanTriggerConditionSchema,
  type AccountSharePricePlanTriggerCondition,
} from "./unions/account-share-price-plan-trigger-condition.js";

export type AccountSharePricePlanTrigger = {
  accountShare?: AccountShareFilterCriteria;
  condition?: AccountSharePricePlanTriggerCondition;
  changePlan?: boolean;
  changePlanDetails?: ChangePlanDetails;
};

export const accountSharePricePlanTriggerSchema: Schema<AccountSharePricePlanTrigger> =
  s.object<AccountSharePricePlanTrigger>({
    accountShare: s.optional(s.lazy(() => accountShareFilterCriteriaSchema)),
    condition: s.optional(s.lazy(() => accountSharePricePlanTriggerConditionSchema)),
    changePlan: s.optional(s.boolean()),
    changePlanDetails: s.optional(s.lazy(() => changePlanDetailsSchema)),
  });
