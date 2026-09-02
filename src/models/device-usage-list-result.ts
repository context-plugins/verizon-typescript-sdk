import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { usageSchema, type Usage } from "./usage.js";

export type DeviceUsageListResult = {
  hasMoreData?: boolean;
  usageHistory?: Usage[];
};

export const deviceUsageListResultSchema: Schema<DeviceUsageListResult> = s.object<DeviceUsageListResult>({
  hasMoreData: s.optional(s.boolean()),
  usageHistory: s.optional(s.array(s.lazy(() => usageSchema))),
});
