import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { deviceIdSchema, type DeviceId } from "./device-id.js";
import { labelSchema, type Label } from "./label.js";

/**
 * Request to return the daily network data usage of a single device during a specified time period.
 */
export type DeviceUsageListRequest = {
  /** The earliest date for which you want usage data. */
  earliest: string;
  /** The last date for which you want usage data. */
  latest: string;
  /** An identifier for a single device. */
  deviceId?: DeviceId;
  label?: Label;
};

export const deviceUsageListRequestSchema: Schema<DeviceUsageListRequest> = s.object<DeviceUsageListRequest>({
  earliest: s.string(),
  latest: s.string(),
  deviceId: s.optional(s.lazy(() => deviceIdSchema)),
  label: s.optional(s.lazy(() => labelSchema)),
});
