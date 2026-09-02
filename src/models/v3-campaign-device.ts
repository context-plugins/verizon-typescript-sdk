import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { v3DeviceStatusSchema, type V3DeviceStatus } from "./v3-device-status.js";

export type V3CampaignDevice = {
  totalDevice?: number;
  hasMoreData: boolean;
  lastSeenDeviceId?: string;
  maxPageSize: number;
  deviceList: V3DeviceStatus[];
};

export const v3CampaignDeviceSchema: Schema<V3CampaignDevice> = s.object<V3CampaignDevice>({
  totalDevice: s.optional(s.number()),
  hasMoreData: s.boolean(),
  lastSeenDeviceId: s.optional(s.string()),
  maxPageSize: s.number(),
  deviceList: s.array(s.lazy(() => v3DeviceStatusSchema)),
});
