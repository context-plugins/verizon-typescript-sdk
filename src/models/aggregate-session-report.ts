import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { aggregateUsageErrorSchema, type AggregateUsageError } from "./aggregate-usage-error.js";
import { aggregateUsageItemSchema, type AggregateUsageItem } from "./aggregate-usage-item.js";

export type AggregateSessionReport = {
  txid?: string;
  usage?: AggregateUsageItem[];
  errors?: AggregateUsageError[];
};

export const aggregateSessionReportSchema: Schema<AggregateSessionReport> = s.object<AggregateSessionReport>({
  txid: s.optional(s.string()),
  usage: s.optional(s.array(s.lazy(() => aggregateUsageItemSchema))),
  errors: s.optional(s.array(s.lazy(() => aggregateUsageErrorSchema))),
});
