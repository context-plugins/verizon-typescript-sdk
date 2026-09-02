import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { readySimDeviceIdSchema, type ReadySimDeviceId } from "./ready-sim-device-id.js";
import { usageHistorySchema, type UsageHistory } from "./usage-history.js";

export type ResponseToUsageQuery = {
  hasmoredata?: boolean;
  deviceId?: ReadySimDeviceId;
  usageHistory?: UsageHistory[];
};

export const responseToUsageQuerySchema: Schema<ResponseToUsageQuery> = s.object<ResponseToUsageQuery>({
  hasmoredata: s.optional(s.boolean()),
  deviceId: s.optional(s.lazy(() => readySimDeviceIdSchema)),
  usageHistory: s.optional(s.array(s.lazy(() => usageHistorySchema))),
});
