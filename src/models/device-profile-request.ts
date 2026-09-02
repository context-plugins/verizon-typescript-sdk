import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { gioDeviceListSchema, type GioDeviceList } from "./gio-device-list.js";

export type DeviceProfileRequest = {
  devices?: GioDeviceList[];
  accountName?: string;
  servicePlan?: string;
};

export const deviceProfileRequestSchema: Schema<DeviceProfileRequest> = s.object<DeviceProfileRequest>({
  devices: s.optional(s.array(s.lazy(() => gioDeviceListSchema))),
  accountName: s.optional(s.string()),
  servicePlan: s.optional(s.string()),
});
