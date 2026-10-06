import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { deviceIdSchema, type DeviceId } from "./device-id.js";

/**
 * Request to return the provisioning history of a specified device during a specified time period.
 */
export type DeviceProvisioningHistoryListRequest = {
  /** An identifier for a single device. */
  deviceId: DeviceId;
  /** The earliest date and time for which you want provisioning data. */
  earliest: string;
  /** The last date and time for which you want provisioning data. */
  latest: string;
};

export const deviceProvisioningHistoryListRequestSchema: Schema<DeviceProvisioningHistoryListRequest> =
  s.object<DeviceProvisioningHistoryListRequest>({
    deviceId: deviceIdSchema,
    earliest: s.string(),
    latest: s.string(),
  });
