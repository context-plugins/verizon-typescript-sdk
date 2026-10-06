import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accountGroupShareObjectSchema, type AccountGroupShareObject } from "./account-group-share-object.js";
import { notificationarraySchema, type Notificationarray } from "./notificationarray.js";
import { triggerCategorySchema, type TriggerCategory } from "./trigger-category.js";

export type AccountGroupShareUpdateTrigger = {
  /** The system assigned UUID of the trigger */
  triggerId?: string;
  /** The user defined name of the trigger */
  triggerName?: string;
  /** The numeric name of the account and must include leading zeroes */
  accountName?: string;
  /** The type of trigger being created or modified */
  triggerCategory?: TriggerCategory;
  dataTrigger?: AccountGroupShareObject;
  notification?: Notificationarray;
};

export const accountGroupShareUpdateTriggerSchema: Schema<AccountGroupShareUpdateTrigger> =
  s.object<AccountGroupShareUpdateTrigger>({
    triggerId: s.optional(s.string()),
    triggerName: s.optional(s.string()),
    accountName: s.optional(s.string()),
    triggerCategory: s.optional(s.lazy(() => triggerCategorySchema)),
    dataTrigger: s.optional(s.lazy(() => accountGroupShareObjectSchema)),
    notification: s.optional(s.lazy(() => notificationarraySchema)),
  });
