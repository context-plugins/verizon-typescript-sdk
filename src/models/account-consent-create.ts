import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AccountConsentCreate = {
  /** An array of device identifiers */
  deviceList?: Record<string, unknown>[];
  /** The numeric name of the account, including leading zeros. */
  accountName?: string;
};

export const accountConsentCreateSchema: Schema<AccountConsentCreate> = s.object<AccountConsentCreate>({
  deviceList: s.optional(s.array(s.record(s.string(), s.unknown()))),
  accountName: s.optional(s.string()),
});
