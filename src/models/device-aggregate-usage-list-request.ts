import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { deviceIdSchema, type DeviceId } from "./device-id.js";
import { labelSchema, type Label } from "./label.js";

/** Request to list device aggregate usage. */
export type DeviceAggregateUsageListRequest = {
  /**
   * The beginning of the reporting period. The startTime cannot be more than 6 months before the
   * current date.
   */
  startTime: string;
  /**
   * The end of the reporting period. The endTime date must be within on month of the startTime
   * date.
   */
  endTime: string;
  /** One or more devices for which you want aggregate data, specified by device ID. */
  deviceIds?: DeviceId[];
  /** The name of a billing account. */
  accountName?: string;
  /** The name of a device group, if you want to only include devices in that group. */
  groupName?: string;
  label?: Label[];
};

export const deviceAggregateUsageListRequestSchema: Schema<DeviceAggregateUsageListRequest> =
  s.object<DeviceAggregateUsageListRequest>({
    startTime: s.string(),
    endTime: s.string(),
    deviceIds: s.optional(s.array(s.lazy(() => deviceIdSchema))),
    accountName: s.optional(s.string()),
    groupName: s.optional(s.string()),
    label: s.optional(s.array(s.lazy(() => labelSchema))),
  });
