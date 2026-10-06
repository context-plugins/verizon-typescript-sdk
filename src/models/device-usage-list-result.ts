import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { usageSchema, type Usage } from "./usage.js";

/**
 * Response to return the daily network data usage of a single device during a specified time
 * period.
 */
export type DeviceUsageListResult = {
  /**
   * False for a status 200 response.True for a status 202 response, indicating that there is more
   * data to be retrieved.
   */
  hasMoreData?: boolean;
  /** Placeholder. */
  usageHistory?: Usage[];
};

export const deviceUsageListResultSchema: Schema<DeviceUsageListResult> = s.object<DeviceUsageListResult>({
  hasMoreData: s.optional(s.boolean()),
  usageHistory: s.optional(s.array(s.lazy(() => usageSchema))),
});
