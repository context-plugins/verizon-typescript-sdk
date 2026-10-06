import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { deviceIdsSchema, type DeviceIds } from "./unions/device-ids.js";

/** Response for a request made to delete a device. */
export type DeleteDevicesResult = {
  /**
   * One object per device to be deleted. Each object must contain a kind and id element identifying
   * the device.
   */
  deviceIds?: DeviceIds;
  /** “Success” if the device was deleted, or “Failed” if there was a problem. */
  status?: string;
  /**
   * Not present if status=Success. One of these messages if status=Failed:The device is not in
   * deactivate state.The user does not have access to delete the device.
   */
  message?: string;
};

export const deleteDevicesResultSchema: Schema<DeleteDevicesResult> = s.object<DeleteDevicesResult>({
  deviceIds: s.optional(s.lazy(() => deviceIdsSchema)),
  status: s.optional(s.string()),
  message: s.optional(s.string()),
});
