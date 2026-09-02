import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ServicePlanTriggerAttribute = {
  key?: string;
};

export const servicePlanTriggerAttributeSchema: Schema<ServicePlanTriggerAttribute> =
  s.object<ServicePlanTriggerAttribute>({
    key: s.optional(s.string()),
  });
