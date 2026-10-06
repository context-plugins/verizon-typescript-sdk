import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CarrierServicePlan = {
  /** The name of the service plan */
  name?: string;
  /** The inventory name or system name of the service plan */
  code?: string;
  /**
   * The ammount of space the service plan will occupy on the Subscriber Information Module (SIM)
   */
  sizeKb?: string;
  /** The billing record ID. This can be numeric, alpha or alphanumeric. */
  carrierServicePlanCode?: string;
};

export const carrierServicePlanSchema: Schema<CarrierServicePlan> = s.object<CarrierServicePlan>({
  name: s.optional(s.string()),
  code: s.optional(s.string()),
  sizeKb: s.optional(s.string()),
  carrierServicePlanCode: s.optional(s.string()),
});
