import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { dailyUsageItemSchema, type DailyUsageItem } from "./daily-usage-item.js";

export type SessionReport = {
  id: string;
  txid: string;
  sessions?: DailyUsageItem[];
};

export const sessionReportSchema: Schema<SessionReport> = s.object<SessionReport>({
  id: s.string(),
  txid: s.string(),
  sessions: s.optional(s.array(s.lazy(() => dailyUsageItemSchema))),
});
