import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accountLevelActionSchema, type AccountLevelAction } from "./account-level-action.js";
import { accountLevelFilterSchema, type AccountLevelFilter } from "./account-level-filter.js";
import {
  accountLevelObjectconditionSchema,
  type AccountLevelObjectcondition,
} from "./unions/account-level-objectcondition.js";

export type AccountLevelObject = {
  filterCriteria?: AccountLevelFilter;
  condition?: AccountLevelObjectcondition;
  action?: AccountLevelAction;
};

export const accountLevelObjectSchema: Schema<AccountLevelObject> = s.object<AccountLevelObject>({
  filterCriteria: s.optional(s.lazy(() => accountLevelFilterSchema)),
  condition: s.optional(s.lazy(() => accountLevelObjectconditionSchema)),
  action: s.optional(s.lazy(() => accountLevelActionSchema)),
});
