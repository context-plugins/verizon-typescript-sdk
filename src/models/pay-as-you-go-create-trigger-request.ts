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
  /** The user defined name of the trigger */
  triggerName?: string;
  /** The Enterprise Customer Profile Database ID */
  ecpdId?: string;
  /** The type of trigger being created or modified */
  triggerCategory?: TriggerCategory;
  pricePlanTrigger?: PayAsYouGoPricePlanTrigger;
  notification?: Notificationarray;
  /** A flag to indicate of the trigger is active, true, or not, false */
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
