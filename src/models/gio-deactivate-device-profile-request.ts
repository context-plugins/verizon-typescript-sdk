import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { gioDeviceListSchema, type GioDeviceList } from "./gio-device-list.js";

export type GioDeactivateDeviceProfileRequest = {
  devices?: GioDeviceList[];
  accountName?: string;
  servicePlan?: string;
  etfWaiver?: boolean;
  reasonCode?: string;
};

export const gioDeactivateDeviceProfileRequestSchema: Schema<GioDeactivateDeviceProfileRequest> =
  s.object<GioDeactivateDeviceProfileRequest>({
    devices: s.optional(s.array(s.lazy(() => gioDeviceListSchema))),
    accountName: s.optional(s.string()),
    servicePlan: s.optional(s.string()),
    etfWaiver: s.optional(s.boolean()),
    reasonCode: s.optional(s.string()),
  });
