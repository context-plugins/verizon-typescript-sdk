import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { kvPairforplannerSchema, type KvPairforplanner } from "./kv-pairforplanner.js";

export type ServicePlanResponseforplanner = {
  carrierServicePlanCode?: string;
  code?: string;
  extendedAttributes?: KvPairforplanner[];
  name?: string;
  sizeKb?: number;
};

export const servicePlanResponseforplannerSchema: Schema<ServicePlanResponseforplanner> =
  s.object<ServicePlanResponseforplanner>({
    carrierServicePlanCode: s.optional(s.string()),
    code: s.optional(s.string()),
    extendedAttributes: s.optional(s.array(s.lazy(() => kvPairforplannerSchema))),
    name: s.optional(s.string()),
    sizeKb: s.optional(s.number()),
  });
