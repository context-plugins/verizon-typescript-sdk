import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { deviceIdsSchema, type DeviceIds } from "./unions/device-ids.js";

export type DeleteDevicesResult = {
  deviceIds?: DeviceIds;
  status?: string;
  message?: string;
};

export const deleteDevicesResultSchema: Schema<DeleteDevicesResult> = s.object<DeleteDevicesResult>({
  deviceIds: s.optional(s.lazy(() => deviceIdsSchema)),
  status: s.optional(s.string()),
  message: s.optional(s.string()),
});
