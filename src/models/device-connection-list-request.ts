import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { deviceIdSchema, type DeviceId } from "./device-id.js";

/** Request to list of network connection events for a device during a specified time period. */
export type DeviceConnectionListRequest = {
  /** An identifier for a single device. */
  deviceId: DeviceId;
  /** The earliest date and time for which you want connection events. */
  earliest: string;
  /** The last date and time for which you want connection events. */
  latest: string;
};

export const deviceConnectionListRequestSchema: Schema<DeviceConnectionListRequest> =
  s.object<DeviceConnectionListRequest>({
    deviceId: deviceIdSchema,
    earliest: s.string(),
    latest: s.string(),
  });
