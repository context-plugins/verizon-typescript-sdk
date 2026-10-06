import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The distribution types:
 *   - Targeted: Generate targeted messages to the road users that are affected by the zone rules
 *   - Broadcast: Broadcast messages to regions based on the Geofence.
 */
export const DistributionTypes = {
  Targeted: "Targeted",
  Broadcast: "Broadcast",
} as const;
export type DistributionTypes = (typeof DistributionTypes)[keyof typeof DistributionTypes] | (string & {});

export const distributionTypesSchema: EnumSchema<DistributionTypes> =
  s.enumOf<DistributionTypes>(DistributionTypes);
