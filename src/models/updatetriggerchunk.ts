import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { activeSchema, type Active } from "./active.js";
import { notificationarraySchema, type Notificationarray } from "./notificationarray.js";
import { pricePlanTriggerSchema, type PricePlanTrigger } from "./price-plan-trigger.js";
import { triggerCategorySchema, type TriggerCategory } from "./trigger-category.js";

export type Updatetriggerchunk = {
  triggerId?: string;
  triggerName?: string;
  ecpdId?: string;
  triggerCategory?: TriggerCategory;
  pricePlanTrigger?: PricePlanTrigger;
  notification?: Notificationarray;
  active?: Active;
};

export const updatetriggerchunkSchema: Schema<Updatetriggerchunk> = s.object<Updatetriggerchunk>({
  triggerId: s.optional(s.string()),
  triggerName: s.optional(s.string()),
  ecpdId: s.optional(s.string()),
  triggerCategory: s.optional(s.lazy(() => triggerCategorySchema)),
  pricePlanTrigger: s.optional(s.lazy(() => pricePlanTriggerSchema)),
  notification: s.optional(s.lazy(() => notificationarraySchema)),
  active: s.optional(s.lazy(() => activeSchema)),
});
