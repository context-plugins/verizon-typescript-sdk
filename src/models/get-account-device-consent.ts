import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type GetAccountDeviceConsent = {
  deviceList?: Record<string, unknown>[];
  accountName?: string;
  allDeviceConsent?: number;
};

export const getAccountDeviceConsentSchema: Schema<GetAccountDeviceConsent> =
  s.object<GetAccountDeviceConsent>({
    deviceList: s.optional(s.array(s.record(s.string(), s.unknown()))),
    accountName: s.optional(s.string()),
    allDeviceConsent: s.optional(s.number()),
  });
