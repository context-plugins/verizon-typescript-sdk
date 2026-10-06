import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { customFieldsSchema, type CustomFields } from "./custom-fields.js";

/** Details of the service plan. */
export type ServicePlan = {
  /** The code that is used by the carrier for the service plan. */
  carrierServicePlanCode?: string;
  /** The code of the service plan, which may not be the same as the name. */
  code?: string;
  /** Any extended attributes for the service plan, as Key and Value pairs. */
  extendedAttributes?: CustomFields[];
  /** The name of the service plan. */
  name?: string;
  /** The size of the service plan in kilobytes. */
  sizeKb?: number;
};

export const servicePlanSchema: Schema<ServicePlan> = s.object<ServicePlan>({
  carrierServicePlanCode: s.optional(s.string()),
  code: s.optional(s.string()),
  extendedAttributes: s.optional(s.array(s.lazy(() => customFieldsSchema))),
  name: s.optional(s.string()),
  sizeKb: s.optional(s.int()),
});
