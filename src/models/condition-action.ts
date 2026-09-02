import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ConditionAction = {
  Notify: "notify",
  Suspend: "suspend",
  ChangePricePlan: "changePricePlan",
} as const;
export type ConditionAction = (typeof ConditionAction)[keyof typeof ConditionAction] | (string & {});

export const conditionActionSchema: EnumSchema<ConditionAction> = s.enumOf<ConditionAction>(ConditionAction);
