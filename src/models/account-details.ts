import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { carrierServicePlanSchema, type CarrierServicePlan } from "./carrier-service-plan.js";
import { carrierSchema, type Carrier } from "./carrier.js";
import { featureSchema, type Feature } from "./feature.js";

export type AccountDetails = {
  /**
   * The numeric name of the account, in the format "0000123456-00001". Leading zeros must be
   * included.
   */
  accountName?: string;
  /**
   * The numeric name of the account, in the format "0000123456-00001". Leading zeros must be
   * included.
   */
  accountNumber?: string;
  /** user defined name of organization */
  organizationName?: string;
  /** Flag set to indicate if account details can be edited or not. Default is "true". */
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
