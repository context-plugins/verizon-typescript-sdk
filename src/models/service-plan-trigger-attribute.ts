import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Key service plan trigger attribute. */
export type ServicePlanTriggerAttribute = {
  /** The ServicePlan name will be listed here. */
  key?: string;
};

export const servicePlanTriggerAttributeSchema: Schema<ServicePlanTriggerAttribute> =
  s.object<ServicePlanTriggerAttribute>({
    key: s.optional(s.string()),
  });
