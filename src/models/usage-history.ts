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
  bytesUsed: s.optional(s.number()),
  serviceplan: s.optional(s.string()),
  smsUsed: s.optional(s.number()),
  moSms: s.optional(s.number()),
  mtSms: s.optional(s.number()),
  source: s.optional(s.string()),
  eventDateTime: s.optional(s.dateTime()),
  _keysMap: {
    moSms: "moSMS",
    mtSms: "mtSMS",
  },
});
