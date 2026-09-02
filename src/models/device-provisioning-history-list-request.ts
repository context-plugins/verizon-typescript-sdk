import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { deviceIdSchema, type DeviceId } from "./device-id.js";

export type DeviceProvisioningHistoryListRequest = {
  deviceId: DeviceId;
  earliest: string;
  latest: string;
};

export const deviceProvisioningHistoryListRequestSchema: Schema<DeviceProvisioningHistoryListRequest> =
  s.object<DeviceProvisioningHistoryListRequest>({
    deviceId: deviceIdSchema,
    earliest: s.string(),
    latest: s.string(),
  });
