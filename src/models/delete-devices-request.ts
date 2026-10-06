import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accountDeviceListSchema, type AccountDeviceList } from "./account-device-list.js";

/** Request to delete a device request. */
export type DeleteDevicesRequest = {
  /**
   * A list of up to 100 devices that you want to delete, specified by device identifier. You only
   * need to provide one identifier per device.
   */
  devicesToDelete: AccountDeviceList[];
  /**
   * The Verizon billing account that the device group belongs to. An account name is usually
   * numeric, and must include any leading zeros.
   */
  accountName?: string;
};

export const deleteDevicesRequestSchema: Schema<DeleteDevicesRequest> = s.object<DeleteDevicesRequest>({
  devicesToDelete: s.array(s.lazy(() => accountDeviceListSchema)),
  accountName: s.optional(s.string()),
});
