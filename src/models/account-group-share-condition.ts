import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { conditionActionSchema, type ConditionAction } from "./condition-action.js";

export type AccountGroupShareCondition = {
  action?: ConditionAction;
};

export const accountGroupShareConditionSchema: Schema<AccountGroupShareCondition> =
  s.object<AccountGroupShareCondition>({
    action: s.optional(s.lazy(() => conditionActionSchema)),
  });
