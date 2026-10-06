import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { provisioningHistorySchema, type ProvisioningHistory } from "./provisioning-history.js";

/**
 * Response to return the provisioning history of a specified device during a specified time period.
 */
export type DeviceProvisioningHistoryListResult = {
  /**
   * False for a status 200 response.True for a status 202 response, indicating that there is more
   * data to be retrieved.
   */
  hasMoreData?: boolean;
  /** The provisioning history of a specified device during a specified time period. */
  provisioningHistory?: ProvisioningHistory[];
};

export const deviceProvisioningHistoryListResultSchema: Schema<DeviceProvisioningHistoryListResult> =
  s.object<DeviceProvisioningHistoryListResult>({
    hasMoreData: s.optional(s.boolean()),
    provisioningHistory: s.optional(s.array(s.lazy(() => provisioningHistorySchema))),
  });
