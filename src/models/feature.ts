import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Feature = {
  /**
   * The calling and data features available for the account. **Note:** for Global IoT Orchestrator,
   * the features `eUICC Verizon as Lead` and `Global eSim Billing` will always be present.
   */
  features?: string;
};

export const featureSchema: Schema<Feature> = s.object<Feature>({
  features: s.optional(s.string()),
});
