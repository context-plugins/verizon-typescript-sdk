import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  accountSharePricePlanTriggerSchema,
  type AccountSharePricePlanTrigger,
} from "./account-share-price-plan-trigger.js";
import { activeSchema, type Active } from "./active.js";
import { notificationarraySchema, type Notificationarray } from "./notificationarray.js";
import { triggerCategorySchema, type TriggerCategory } from "./trigger-category.js";

export type AccountShareCreateTriggerRequest = {
  triggerName?: string;
  ecpdId?: string;
  triggerCategory?: TriggerCategory;
  pricePlanTrigger?: AccountSharePricePlanTrigger;
  notification?: Notificationarray;
  active?: Active;
};

export const accountShareCreateTriggerRequestSchema: Schema<AccountShareCreateTriggerRequest> =
  s.object<AccountShareCreateTriggerRequest>({
    triggerName: s.optional(s.string()),
    ecpdId: s.optional(s.string()),
    triggerCategory: s.optional(s.lazy(() => triggerCategorySchema)),
    pricePlanTrigger: s.optional(s.lazy(() => accountSharePricePlanTriggerSchema)),
    notification: s.optional(s.lazy(() => notificationarraySchema)),
    active: s.optional(s.lazy(() => activeSchema)),
  });
