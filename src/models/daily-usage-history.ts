import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { extendedAttributeSchema, type ExtendedAttribute } from "./extended-attribute.js";

export type DailyUsageHistory = {
  /** the total data usage recorded in Bytes */
  bytesUsed?: string;
  extendedAttributes?: ExtendedAttribute[];
  servicePlan?: string;
  /** The total number of SMS messages from and to the device */
  smsUsed?: string;
  /** Where the collected data is being gathered from */
  source?: string;
  /** Timestamp of when the retrieved record was completed ($datetime) */
  timestamp?: string;
};

export const dailyUsageHistorySchema: Schema<DailyUsageHistory> = s.object<DailyUsageHistory>({
  bytesUsed: s.optional(s.string()),
  extendedAttributes: s.optional(s.array(s.lazy(() => extendedAttributeSchema))),
  servicePlan: s.optional(s.string()),
  smsUsed: s.optional(s.string()),
  source: s.optional(s.string()),
  timestamp: s.optional(s.string()),
});
