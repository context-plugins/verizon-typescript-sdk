import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  accountSharePricePlanTriggerSchema,
  type AccountSharePricePlanTrigger,
} from "./account-share-price-plan-trigger.js";
import { activeSchema, type Active } from "./active.js";
import { notificationarraySchema, type Notificationarray } from "./notificationarray.js";
import { triggerCategorySchema, type TriggerCategory } from "./trigger-category.js";

export type AccountShareUpdateTriggerRequest = {
  /** The system assigned UUID of the trigger */
  triggerId?: string;
  /** The user defined name of the trigger */
  triggerName?: string;
  /** The Enterprise Customer Profile Database ID */
  ecpdId?: string;
  /** The type of trigger being created or modified */
  triggerCategory?: TriggerCategory;
  pricePlanTrigger?: AccountSharePricePlanTrigger;
  notification?: Notificationarray;
  /** A flag to indicate of the trigger is active, true, or not, false */
  active?: Active;
};

export const accountShareUpdateTriggerRequestSchema: Schema<AccountShareUpdateTriggerRequest> =
  s.object<AccountShareUpdateTriggerRequest>({
    triggerId: s.optional(s.string()),
    triggerName: s.optional(s.string()),
    ecpdId: s.optional(s.string()),
    triggerCategory: s.optional(s.lazy(() => triggerCategorySchema)),
    pricePlanTrigger: s.optional(s.lazy(() => accountSharePricePlanTriggerSchema)),
    notification: s.optional(s.lazy(() => notificationarraySchema)),
    active: s.optional(s.lazy(() => activeSchema)),
  });
