import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { gioDeviceIdSchema, type GioDeviceId } from "./gio-device-id.js";

export type DailyUsage = {
  deviceId?: GioDeviceId;
  earliest?: string;
  latest?: string;
};

export const dailyUsageSchema: Schema<DailyUsage> = s.object<DailyUsage>({
  deviceId: s.optional(s.lazy(() => gioDeviceIdSchema)),
  earliest: s.optional(s.string()),
  latest: s.optional(s.string()),
});
