import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { dataTriggerSchema, type DataTrigger } from "./data-trigger.js";
import { notificationarraySchema, type Notificationarray } from "./notificationarray.js";
import { triggerCategorySchema, type TriggerCategory } from "./trigger-category.js";

export type AccountLevelCreateTrigger = {
  triggerName?: string;
  ecpdId?: string;
  triggerCategory?: TriggerCategory;
  dataTrigger?: DataTrigger;
  notification?: Notificationarray;
};

export const accountLevelCreateTriggerSchema: Schema<AccountLevelCreateTrigger> =
  s.object<AccountLevelCreateTrigger>({
    triggerName: s.optional(s.string()),
    ecpdId: s.optional(s.string()),
    triggerCategory: s.optional(s.lazy(() => triggerCategorySchema)),
    dataTrigger: s.optional(s.lazy(() => dataTriggerSchema)),
    notification: s.optional(s.lazy(() => notificationarraySchema)),
  });
