import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const DistributionTypes = {
  Targeted: "Targeted",
  Broadcast: "Broadcast",
} as const;
export type DistributionTypes = (typeof DistributionTypes)[keyof typeof DistributionTypes] | (string & {});

export const distributionTypesSchema: EnumSchema<DistributionTypes> =
  s.enumOf<DistributionTypes>(DistributionTypes);
