import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type IpPool = {
  poolName?: string;
  poolType?: string;
  isDefaultPool?: boolean;
};

export const ipPoolSchema: Schema<IpPool> = s.object<IpPool>({
  poolName: s.optional(s.string()),
  poolType: s.optional(s.string()),
  isDefaultPool: s.optional(s.boolean()),
});
