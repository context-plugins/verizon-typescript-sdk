import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { deviceList2Schema, type DeviceList2 } from "./device-list2.js";

export type ProfileRequest2 = {
  devices?: DeviceList2[];
  accountName?: string;
  carrierName?: string;
  reasonCode?: string;
  etfWaiver?: boolean;
  checkFallbackProfile?: boolean;
};

export const profileRequest2Schema: Schema<ProfileRequest2> = s.object<ProfileRequest2>({
  devices: s.optional(s.array(s.lazy(() => deviceList2Schema))),
  accountName: s.optional(s.string()),
  carrierName: s.optional(s.string()),
  reasonCode: s.optional(s.string()),
  etfWaiver: s.optional(s.boolean()),
  checkFallbackProfile: s.optional(s.boolean()),
});
