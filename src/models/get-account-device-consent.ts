import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type GetAccountDeviceConsent = {
  /** An array of device identifiers */
  deviceList?: Record<string, unknown>[];
  /** The numeric name of the account, including leading zeros. */
  accountName?: string;
  /** If consent is set at the account level, this value will show the consent level. */
  allDeviceConsent?: number;
};

export const getAccountDeviceConsentSchema: Schema<GetAccountDeviceConsent> =
  s.object<GetAccountDeviceConsent>({
    deviceList: s.optional(s.array(s.record(s.string(), s.unknown()))),
    accountName: s.optional(s.string()),
    allDeviceConsent: s.optional(s.int()),
  });
