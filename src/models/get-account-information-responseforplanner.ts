import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { ipPoolforplannerSchema, type IpPoolforplanner } from "./ip-poolforplanner.js";
import {
  servicePlanResponseforplannerSchema,
  type ServicePlanResponseforplanner,
} from "./service-plan-responseforplanner.js";

export type GetAccountInformationResponseforplanner = {
  accountName?: string;
  accountNumber?: string | null;
  carriers?: string[];
  features?: string[];
  ipPools?: IpPoolforplanner[];
  isProvisioningAllowed?: boolean;
  organizationName?: string;
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
