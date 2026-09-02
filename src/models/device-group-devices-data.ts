import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accountDeviceListSchema, type AccountDeviceList } from "./account-device-list.js";

export type DeviceGroupDevicesData = {
  description?: string;
  devices?: AccountDeviceList[];
  hasMoreData?: boolean;
  name?: string;
};

export const deviceGroupDevicesDataSchema: Schema<DeviceGroupDevicesData> = s.object<DeviceGroupDevicesData>({
  description: s.optional(s.string()),
  devices: s.optional(s.array(s.lazy(() => accountDeviceListSchema))),
  hasMoreData: s.optional(s.boolean()),
  name: s.optional(s.string()),
});
