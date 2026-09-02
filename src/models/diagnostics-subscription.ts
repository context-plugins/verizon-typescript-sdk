import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DiagnosticsSubscription = {
  accountName: string;
  createdOn: Date;
  lastUpdated: Date;
  totalAllowed: number;
  totalUsed: number;
  skuName: string;
};

export const diagnosticsSubscriptionSchema: Schema<DiagnosticsSubscription> =
  s.object<DiagnosticsSubscription>({
    accountName: s.string(),
    createdOn: s.dateTime(),
    lastUpdated: s.dateTime(),
    totalAllowed: s.number(),
    totalUsed: s.number(),
    skuName: s.string(),
  });
