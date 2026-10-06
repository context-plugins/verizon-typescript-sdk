import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Contains usage information per device. */
export type AggregateUsageItem = {
  /** The International Mobile Equipment Identifier of the device. */
  imei?: string;
  /** Number of sessions established by the device reporting usage. */
  numberOfSessions?: number;
  /** The amount of data transferred by the device reporting usage, measured in Bytes. */
  bytesTransferred?: number;
};

export const aggregateUsageItemSchema: Schema<AggregateUsageItem> = s.object<AggregateUsageItem>({
  imei: s.optional(s.string()),
  numberOfSessions: s.optional(s.int()),
  bytesTransferred: s.optional(s.int()),
});
