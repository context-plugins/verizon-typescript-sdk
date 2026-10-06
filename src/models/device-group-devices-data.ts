import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accountDeviceListSchema, type AccountDeviceList } from "./account-device-list.js";

/** Returns the name, description, and list of devices in a device group. */
export type DeviceGroupDevicesData = {
  /** The description of the device group. */
  description?: string;
  /** The devices in the device group. */
  devices?: AccountDeviceList[];
  /**
   * False for a status 200 response.True for a status 202 response, indicating that there is more
   * data to be retrieved.
   */
  hasMoreData?: boolean;
  /** The name of the device group. */
  name?: string;
};

export const deviceGroupDevicesDataSchema: Schema<DeviceGroupDevicesData> = s.object<DeviceGroupDevicesData>({
  description: s.optional(s.string()),
  devices: s.optional(s.array(s.lazy(() => accountDeviceListSchema))),
  hasMoreData: s.optional(s.boolean()),
  name: s.optional(s.string()),
});
