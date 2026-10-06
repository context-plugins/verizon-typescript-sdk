import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { dailyUsageItemSchema, type DailyUsageItem } from "./daily-usage-item.js";

/** Session report for a device. */
export type SessionReport = {
  /** The 10-digit ID of the device. */
  id: string;
  /**
   * A unique string (UUID) that associates the request with the location report information that is
   * sent in asynchronous callback message.ThingSpace will send a separate callback message for each
   * device that was in the request. All of the callback messages will have a txid.
   */
  txid: string;
  /**
   * An object containing the start and end time of the session with the amount of data transferred.
   */
  sessions?: DailyUsageItem[];
};

export const sessionReportSchema: Schema<SessionReport> = s.object<SessionReport>({
  id: s.string(),
  txid: s.string(),
  sessions: s.optional(s.array(s.lazy(() => dailyUsageItemSchema))),
});
