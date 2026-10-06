import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { deviceIdSchema, type DeviceId } from "../device-id.js";

/**
 * One object per device to be deleted. Each object must contain a kind and id element identifying
 * the device.
 */
export type DeviceIds = DeviceId[] | DeviceId;

export const deviceIdsSchema: Schema<DeviceIds> = s.of<DeviceIds>(
  s.union([s.array(s.lazy(() => deviceIdSchema)), s.lazy(() => deviceIdSchema)]),
);
