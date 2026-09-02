import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const TriggerCondition = {
  Enter: "enter",
  Leave: "leave",
  Inside: "inside",
  Crossing: "crossing",
} as const;
export type TriggerCondition = (typeof TriggerCondition)[keyof typeof TriggerCondition] | (string & {});

export const triggerConditionSchema: EnumSchema<TriggerCondition> =
  s.enumOf<TriggerCondition>(TriggerCondition);
