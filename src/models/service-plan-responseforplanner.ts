import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { kvPairforplannerSchema, type KvPairforplanner } from "./kv-pairforplanner.js";

export type ServicePlanResponseforplanner = {
  /** The name of the service plan code */
  carrierServicePlanCode?: string;
  /** The actiavtion code value. */
  code?: string;
  /** key/value pairs assigned by the user for filtering. */
  extendedAttributes?: KvPairforplanner[];
  /** The carrier name of the active profile. */
  name?: string;
  /** size in Kilobytes of the service plan */
  sizeKb?: number;
};

export const servicePlanResponseforplannerSchema: Schema<ServicePlanResponseforplanner> =
  s.object<ServicePlanResponseforplanner>({
    carrierServicePlanCode: s.optional(s.string()),
    code: s.optional(s.string()),
    extendedAttributes: s.optional(s.array(s.lazy(() => kvPairforplannerSchema))),
    name: s.optional(s.string()),
    sizeKb: s.optional(s.int()),
  });
