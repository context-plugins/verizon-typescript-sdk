import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type UsageHistory = {
  bytesUsed?: number;
  serviceplan?: string;
  smsUsed?: number;
  moSms?: number;
  mtSms?: number;
  source?: string;
  eventDateTime?: Date;
};

export const usageHistorySchema: Schema<UsageHistory> = s.object<UsageHistory>({
  bytesUsed: s.optional(s.int()),
  serviceplan: s.optional(s.string()),
  smsUsed: s.optional(s.int()),
  moSms: s.optional(s.int()),
  mtSms: s.optional(s.int()),
  source: s.optional(s.string()),
  eventDateTime: s.optional(s.dateTime()),
  _keysMap: {
    moSms: "moSMS",
    mtSms: "mtSMS",
  },
});
