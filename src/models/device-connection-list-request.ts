import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { deviceIdSchema, type DeviceId } from "./device-id.js";

export type DeviceConnectionListRequest = {
  deviceId: DeviceId;
  earliest: string;
  latest: string;
};

export const deviceConnectionListRequestSchema: Schema<DeviceConnectionListRequest> =
  s.object<DeviceConnectionListRequest>({
    deviceId: deviceIdSchema,
    earliest: s.string(),
    latest: s.string(),
  });
