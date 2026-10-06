import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { dailyUsageHistorySchema, type DailyUsageHistory } from "./daily-usage-history.js";
import { gioDeviceIdSchema, type GioDeviceId } from "./gio-device-id.js";

export type DailyUsageResponse = {
  /**
   * A flag set to indicate if there is more than one page of data returned by the query (true) or
   * if only one page of data returned (false)
   */
  hasMoreData?: boolean;
  deviceId?: GioDeviceId;
  usageHistory?: DailyUsageHistory[];
};

export const dailyUsageResponseSchema: Schema<DailyUsageResponse> = s.object<DailyUsageResponse>({
  hasMoreData: s.optional(s.boolean()),
  deviceId: s.optional(s.lazy(() => gioDeviceIdSchema)),
  usageHistory: s.optional(s.array(s.lazy(() => dailyUsageHistorySchema))),
});
