import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { ipPoolSchema, type IpPool } from "./ip-pool.js";
import { servicePlanSchema, type ServicePlan } from "./service-plan.js";

export type Account = {
  accountName?: string;
  accountNumber?: string;
  organizationName?: string;
  isProvisioningAllowed?: boolean;
  carriers?: string[];
  features?: string[];
  ipPools?: IpPool[];
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
