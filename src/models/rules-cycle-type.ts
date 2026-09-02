import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const RulesCycleType = {
  Daily: "Daily",
  Weekly: "Weekly",
  Monthly: "Monthly",
} as const;
export type RulesCycleType = (typeof RulesCycleType)[keyof typeof RulesCycleType] | (string & {});

export const rulesCycleTypeSchema: EnumSchema<RulesCycleType> = s.enumOf<RulesCycleType>(RulesCycleType);
