import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { aggregateUsageErrorSchema, type AggregateUsageError } from "./aggregate-usage-error.js";
import { aggregateUsageItemSchema, type AggregateUsageItem } from "./aggregate-usage-item.js";

/** Session and usage details for up to 10 devices. */
export type AggregateSessionReport = {
  /**
   * A unique string (UUID) that associates the request with the location report information that is
   * sent in asynchronous callback message.ThingSpace will send a separate callback message for each
   * device that was in the request. All of the callback messages will have a txid.
   */
  txid?: string;
  /** Contains usage per device. */
  usage?: AggregateUsageItem[];
  /** An object containing any errors reported by the device. */
  errors?: AggregateUsageError[];
};

export const aggregateSessionReportSchema: Schema<AggregateSessionReport> = s.object<AggregateSessionReport>({
  txid: s.optional(s.string()),
  usage: s.optional(s.array(s.lazy(() => aggregateUsageItemSchema))),
  errors: s.optional(s.array(s.lazy(() => aggregateUsageErrorSchema))),
});
