import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** IP pool that is available to the account. */
export type IpPool = {
  /** The name of the IP pool. */
  poolName?: string;
  /** The type of IP pool, such as “Static IP” or “Dynamic IP.” */
  poolType?: string;
  /** True if this is the default IP pool for the account. */
  isDefaultPool?: boolean;
};

export const ipPoolSchema: Schema<IpPool> = s.object<IpPool>({
  poolName: s.optional(s.string()),
  poolType: s.optional(s.string()),
  isDefaultPool: s.optional(s.boolean()),
});
