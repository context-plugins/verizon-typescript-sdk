import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AggregateUsageItem = {
  imei?: string;
  numberOfSessions?: number;
  bytesTransferred?: number;
};

export const aggregateUsageItemSchema: Schema<AggregateUsageItem> = s.object<AggregateUsageItem>({
  imei: s.optional(s.string()),
  numberOfSessions: s.optional(s.number()),
  bytesTransferred: s.optional(s.number()),
});
