import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { dataTrigger1Schema, type DataTrigger1 } from "./data-trigger1.js";
import { notificationarraySchema, type Notificationarray } from "./notificationarray.js";
import { triggerCategorySchema, type TriggerCategory } from "./trigger-category.js";

export type AccountLevelUpdateTrigger = {
  triggerId?: string;
  triggerName?: string;
  ecpdId?: string;
  triggerCategory?: TriggerCategory;
  dataTrigger?: DataTrigger1;
  notification?: Notificationarray;
};

export const accountLevelUpdateTriggerSchema: Schema<AccountLevelUpdateTrigger> =
  s.object<AccountLevelUpdateTrigger>({
    triggerId: s.optional(s.string()),
    triggerName: s.optional(s.string()),
    ecpdId: s.optional(s.string()),
    triggerCategory: s.optional(s.lazy(() => triggerCategorySchema)),
    dataTrigger: s.optional(s.lazy(() => dataTrigger1Schema)),
    notification: s.optional(s.lazy(() => notificationarraySchema)),
  });
