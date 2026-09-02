import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AccountConsentUpdate = {
  accountName?: string;
  allDeviceConsent?: number;
};

export const accountConsentUpdateSchema: Schema<AccountConsentUpdate> = s.object<AccountConsentUpdate>({
  accountName: s.optional(s.string()),
  allDeviceConsent: s.optional(s.number()),
});
