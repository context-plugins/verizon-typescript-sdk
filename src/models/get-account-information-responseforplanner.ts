import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { ipPoolforplannerSchema, type IpPoolforplanner } from "./ip-poolforplanner.js";
import {
  servicePlanResponseforplannerSchema,
  type ServicePlanResponseforplanner,
} from "./service-plan-responseforplanner.js";

export type GetAccountInformationResponseforplanner = {
  accountName?: string;
  /** The numeric name of the account, including leading zeros. */
  accountNumber?: string | null;
  /** The list of carrier names with profiles. */
  carriers?: string[];
  /** a list of features associated with the resident profiles. */
  features?: string[];
  ipPools?: IpPoolforplanner[];
  /** A flag indicating if provisioning is allowed (true) or provisioning is locked (false). */
  isProvisioningAllowed?: boolean;
  /** The user assigned organization name. */
  organizationName?: string;
  /** A list of service plans associated with the resident profiles. */
  servicePlans?: ServicePlanResponseforplanner[];
};

export const getAccountInformationResponseforplannerSchema: Schema<GetAccountInformationResponseforplanner> =
  s.object<GetAccountInformationResponseforplanner>({
    accountName: s.optional(s.string()),
    accountNumber: s.optionalNullable(s.string()),
    carriers: s.optional(s.array(s.string())),
    features: s.optional(s.array(s.string())),
    ipPools: s.optional(s.array(s.lazy(() => ipPoolforplannerSchema))),
    isProvisioningAllowed: s.optional(s.boolean()),
    organizationName: s.optional(s.string()),
    servicePlans: s.optional(s.array(s.lazy(() => servicePlanResponseforplannerSchema))),
  });
