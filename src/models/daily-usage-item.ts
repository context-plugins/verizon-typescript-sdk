import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Contains only dates when device had sessions. */
export type DailyUsageItem = {
  /** Start date of session. ISO 8601 format. */
  startTime?: string;
  /** End date of session. ISO 8601 format. */
  endTime?: string;
  /** Amount of data transferred, measured in Bytes. */
  numBytes?: number;
};

export const dailyUsageItemSchema: Schema<DailyUsageItem> = s.object<DailyUsageItem>({
  startTime: s.optional(s.string()),
  endTime: s.optional(s.string()),
  numBytes: s.optional(s.int()),
});
