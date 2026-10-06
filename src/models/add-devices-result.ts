import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { deviceIdSchema, type DeviceId } from "./device-id.js";

/**
 * Contains the device identifiers and a success or failure response for each device in the request.
 */
export type AddDevicesResult = {
  /** Identifiers for the device. */
  deviceIds?: DeviceId[];
  /** The status message for the current device. This will be Success or Failed */
  response?: string;
};

export const addDevicesResultSchema: Schema<AddDevicesResult> = s.object<AddDevicesResult>({
  deviceIds: s.optional(s.array(s.lazy(() => deviceIdSchema))),
  response: s.optional(s.string()),
});
