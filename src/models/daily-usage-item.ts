import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DailyUsageItem = {
  startTime?: string;
  endTime?: string;
  numBytes?: number;
};

export const dailyUsageItemSchema: Schema<DailyUsageItem> = s.object<DailyUsageItem>({
  startTime: s.optional(s.string()),
  endTime: s.optional(s.string()),
  numBytes: s.optional(s.number()),
});
