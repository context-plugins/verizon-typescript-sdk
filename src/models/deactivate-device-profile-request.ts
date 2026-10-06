import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { deactivateDeviceListSchema, type DeactivateDeviceList } from "./deactivate-device-list.js";

export type DeactivateDeviceProfileRequest = {
  accountName: string;
  reasonCode: string;
  devices?: DeactivateDeviceList[];
  carrierName?: string;
  /** @default true */
  etfWaiver?: boolean;
  /** @default false */
  checkFallbackProfile?: boolean;
};

export const deactivateDeviceProfileRequestSchema: Schema<DeactivateDeviceProfileRequest> =
  s.object<DeactivateDeviceProfileRequest>({
    accountName: s.string(),
    reasonCode: s.string(),
    devices: s.optional(s.array(s.lazy(() => deactivateDeviceListSchema))),
    carrierName: s.optional(s.string()),
    etfWaiver: s.defaulted(s.boolean(), true),
    checkFallbackProfile: s.defaulted(s.boolean(), false),
  });
