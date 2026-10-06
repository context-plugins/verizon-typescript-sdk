import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AccountConsentUpdate = {
  /** The numeric name of the account, including leading zeros. */
  accountName?: string;
  /** The consent setting to use for all the devices in the account. */
  allDeviceConsent?: number;
};

export const accountConsentUpdateSchema: Schema<AccountConsentUpdate> = s.object<AccountConsentUpdate>({
  accountName: s.optional(s.string()),
  allDeviceConsent: s.optional(s.int()),
});
