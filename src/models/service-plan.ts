import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { customFieldsSchema, type CustomFields } from "./custom-fields.js";

export type ServicePlan = {
  carrierServicePlanCode?: string;
  code?: string;
  extendedAttributes?: CustomFields[];
  name?: string;
  sizeKb?: number;
};

export const servicePlanSchema: Schema<ServicePlan> = s.object<ServicePlan>({
  carrierServicePlanCode: s.optional(s.string()),
  code: s.optional(s.string()),
  extendedAttributes: s.optional(s.array(s.lazy(() => customFieldsSchema))),
  name: s.optional(s.string()),
  sizeKb: s.optional(s.number()),
});
