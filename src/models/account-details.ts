import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { carrierServicePlanSchema, type CarrierServicePlan } from "./carrier-service-plan.js";
import { carrierSchema, type Carrier } from "./carrier.js";
import { featureSchema, type Feature } from "./feature.js";

export type AccountDetails = {
  accountName?: string;
  accountNumber?: string;
  organizationName?: string;
  isProvisioningAllowed?: boolean;
  carriers?: Carrier[];
  features?: Feature[];
  servicePlans?: CarrierServicePlan[];
};

export const accountDetailsSchema: Schema<AccountDetails> = s.object<AccountDetails>({
  accountName: s.optional(s.string()),
  accountNumber: s.optional(s.string()),
  organizationName: s.optional(s.string()),
  isProvisioningAllowed: s.optional(s.boolean()),
  carriers: s.optional(s.array(s.lazy(() => carrierSchema))),
  features: s.optional(s.array(s.lazy(() => featureSchema))),
  servicePlans: s.optional(s.array(s.lazy(() => carrierServicePlanSchema))),
});
