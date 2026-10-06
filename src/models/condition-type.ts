import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The condition type being monitored */
export const ConditionType = {
  Individual: "Individual",
  Aging: "Aging",
  UsageAllowance: "UsageAllowance",
} as const;
export type ConditionType = (typeof ConditionType)[keyof typeof ConditionType] | (string & {});

export const conditionTypeSchema: EnumSchema<ConditionType> = s.enumOf<ConditionType>(ConditionType);
