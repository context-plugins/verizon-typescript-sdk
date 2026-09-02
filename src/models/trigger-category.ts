import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const TriggerCategory = {
  AccountUsage: "AccountUsage",
  DeviceGroupUsage: "DeviceGroupUsage",
  PricePlanDataUsage: "PricePlanDataUsage",
} as const;
export type TriggerCategory = (typeof TriggerCategory)[keyof typeof TriggerCategory] | (string & {});

export const triggerCategorySchema: EnumSchema<TriggerCategory> = s.enumOf<TriggerCategory>(TriggerCategory);
