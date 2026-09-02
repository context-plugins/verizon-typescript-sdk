import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accountGroupShareActionSchema, type AccountGroupShareAction } from "./account-group-share-action.js";
import {
  accountGroupShareConditionSchema,
  type AccountGroupShareCondition,
} from "./account-group-share-condition.js";
import { accountGroupShareFilterSchema, type AccountGroupShareFilter } from "./account-group-share-filter.js";

export type AccountGroupShareFilterCriteria = {
  filterCriteria?: AccountGroupShareFilter;
  condition?: AccountGroupShareCondition;
  action?: AccountGroupShareAction;
};

export const accountGroupShareFilterCriteriaSchema: Schema<AccountGroupShareFilterCriteria> =
  s.object<AccountGroupShareFilterCriteria>({
    filterCriteria: s.optional(s.lazy(() => accountGroupShareFilterSchema)),
    condition: s.optional(s.lazy(() => accountGroupShareConditionSchema)),
    action: s.optional(s.lazy(() => accountGroupShareActionSchema)),
  });
