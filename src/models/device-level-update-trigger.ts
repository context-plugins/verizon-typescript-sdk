import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { dataTrigger2Schema, type DataTrigger2 } from "./data-trigger2.js";
import { notificationarraySchema, type Notificationarray } from "./notificationarray.js";
import { triggerCategorySchema, type TriggerCategory } from "./trigger-category.js";

export type DeviceLevelUpdateTrigger = {
  triggerId?: string;
  triggerName?: string;
  ecpdId?: string;
  triggerCategory?: TriggerCategory;
  dataTrigger?: DataTrigger2;
  notification?: Notificationarray;
};

export const deviceLevelUpdateTriggerSchema: Schema<DeviceLevelUpdateTrigger> =
  s.object<DeviceLevelUpdateTrigger>({
    triggerId: s.optional(s.string()),
    triggerName: s.optional(s.string()),
    ecpdId: s.optional(s.string()),
    triggerCategory: s.optional(s.lazy(() => triggerCategorySchema)),
    dataTrigger: s.optional(s.lazy(() => dataTrigger2Schema)),
    notification: s.optional(s.lazy(() => notificationarraySchema)),
  });
