import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type IpPoolforplanner = {
  isDefaultPool?: boolean;
  poolName?: string;
  poolType?: string;
};

export const ipPoolforplannerSchema: Schema<IpPoolforplanner> = s.object<IpPoolforplanner>({
  isDefaultPool: s.optional(s.boolean()),
  poolName: s.optional(s.string()),
  poolType: s.optional(s.string()),
});
