import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { deviceId1Schema, type DeviceId1 } from "./unions/device-id1.js";

export type ESimDeviceList = {
  deviceIds?: DeviceId1[];
};

export const eSimDeviceListSchema: Schema<ESimDeviceList> = s.object<ESimDeviceList>({
  deviceIds: s.optional(s.array(s.lazy(() => deviceId1Schema))),
});
