import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ChangePlanDetails = {
  toCarrierServicePlanCode?: string;
};

export const changePlanDetailsSchema: Schema<ChangePlanDetails> = s.object<ChangePlanDetails>({
  toCarrierServicePlanCode: s.optional(s.string()),
});
