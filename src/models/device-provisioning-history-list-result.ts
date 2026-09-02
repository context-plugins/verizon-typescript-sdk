import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { provisioningHistorySchema, type ProvisioningHistory } from "./provisioning-history.js";

export type DeviceProvisioningHistoryListResult = {
  hasMoreData?: boolean;
  provisioningHistory?: ProvisioningHistory[];
};

export const deviceProvisioningHistoryListResultSchema: Schema<DeviceProvisioningHistoryListResult> =
  s.object<DeviceProvisioningHistoryListResult>({
    hasMoreData: s.optional(s.boolean()),
    provisioningHistory: s.optional(s.array(s.lazy(() => provisioningHistorySchema))),
  });
