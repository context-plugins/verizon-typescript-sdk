import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { ipPoolSchema, type IpPool } from "./ip-pool.js";
import { servicePlanSchema, type ServicePlan } from "./service-plan.js";

/** Returns information about a specified account. */
export type Account = {
  /** The name of the account. */
  accountName?: string;
  /** The billing number of the account. */
  accountNumber?: string;
  /** The name of the organization that the account is part of. */
  organizationName?: string;
  /**
   * True if devices can be added to the account and activated with a single request. False if
   * devices must be added to the account before they can be activated.
   */
  isProvisioningAllowed?: boolean;
  /** The names of all carriers for the account. */
  carriers?: string[];
  /** The names of features that are enabled for the account. */
  features?: string[];
  /** Array of IP pools that are available to the account. */
  ipPools?: IpPool[];
  /** Array of service plans that are available to the account. */
  servicePlans?: ServicePlan[];
};

export const accountSchema: Schema<Account> = s.object<Account>({
  accountName: s.optional(s.string()),
  accountNumber: s.optional(s.string()),
  organizationName: s.optional(s.string()),
  isProvisioningAllowed: s.optional(s.boolean()),
  carriers: s.optional(s.array(s.string())),
  features: s.optional(s.array(s.string())),
  ipPools: s.optional(s.array(s.lazy(() => ipPoolSchema))),
  servicePlans: s.optional(s.array(s.lazy(() => servicePlanSchema))),
  _keysMap: {
    ipPools: "iPPools",
  },
});
