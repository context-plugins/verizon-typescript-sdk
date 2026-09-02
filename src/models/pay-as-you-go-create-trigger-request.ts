import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { activeSchema, type Active } from "./active.js";
import { notificationarraySchema, type Notificationarray } from "./notificationarray.js";
import {
  payAsYouGoPricePlanTriggerSchema,
  type PayAsYouGoPricePlanTrigger,
} from "./pay-as-you-go-price-plan-trigger.js";
import { triggerCategorySchema, type TriggerCategory } from "./trigger-category.js";

export type PayAsYouGoCreateTriggerRequest = {
  triggerName?: string;
  ecpdId?: string;
  triggerCategory?: TriggerCategory;
  pricePlanTrigger?: PayAsYouGoPricePlanTrigger;
  notification?: Notificationarray;
  active?: Active;
};

export const payAsYouGoCreateTriggerRequestSchema: Schema<PayAsYouGoCreateTriggerRequest> =
  s.object<PayAsYouGoCreateTriggerRequest>({
    triggerName: s.optional(s.string()),
    ecpdId: s.optional(s.string()),
    triggerCategory: s.optional(s.lazy(() => triggerCategorySchema)),
    pricePlanTrigger: s.optional(s.lazy(() => payAsYouGoPricePlanTriggerSchema)),
    notification: s.optional(s.lazy(() => notificationarraySchema)),
    active: s.optional(s.lazy(() => activeSchema)),
  });
