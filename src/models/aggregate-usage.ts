import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { gioDeviceIdSchema, type GioDeviceId } from "./gio-device-id.js";

export type AggregateUsage = {
  deviceId?: GioDeviceId;
  /**
   * The numeric name of the account, in the format "0000123456-00001". Leading zeros must be
   * included.
   */
  accountName?: string;
  /** The start date of the time period queried as "$datetime" */
  startTime?: string;
  /** The end date of the time period being queried as "$datetime" */
  endTime?: string;
};

export const aggregateUsageSchema: Schema<AggregateUsage> = s.object<AggregateUsage>({
  deviceId: s.optional(s.lazy(() => gioDeviceIdSchema)),
  accountName: s.optional(s.string()),
  startTime: s.optional(s.string()),
  endTime: s.optional(s.string()),
});
