import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { v2DeviceStatusSchema, type V2DeviceStatus } from "./v2-device-status.js";

export type V2CampaignDevice = {
  totalDevice?: number;
  hasMoreData: boolean;
  lastSeenDeviceId?: string;
  maxPageSize: number;
  deviceList: V2DeviceStatus[];
};

export const v2CampaignDeviceSchema: Schema<V2CampaignDevice> = s.object<V2CampaignDevice>({
  totalDevice: s.optional(s.number()),
  hasMoreData: s.boolean(),
  lastSeenDeviceId: s.optional(s.string()),
  maxPageSize: s.number(),
  deviceList: s.array(s.lazy(() => v2DeviceStatusSchema)),
});
