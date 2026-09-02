import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accountGroupShareObjectSchema, type AccountGroupShareObject } from "./account-group-share-object.js";
import { notificationarraySchema, type Notificationarray } from "./notificationarray.js";
import { triggerCategorySchema, type TriggerCategory } from "./trigger-category.js";

export type AccountGroupShareCreateTrigger = {
  triggerName?: string;
  accountName?: string;
  triggerCategory?: TriggerCategory;
  pricePlanTrigger?: AccountGroupShareObject;
  notification?: Notificationarray;
};

export const accountGroupShareCreateTriggerSchema: Schema<AccountGroupShareCreateTrigger> =
  s.object<AccountGroupShareCreateTrigger>({
    triggerName: s.optional(s.string()),
    accountName: s.optional(s.string()),
    triggerCategory: s.optional(s.lazy(() => triggerCategorySchema)),
    pricePlanTrigger: s.optional(s.lazy(() => accountGroupShareObjectSchema)),
    notification: s.optional(s.lazy(() => notificationarraySchema)),
  });
