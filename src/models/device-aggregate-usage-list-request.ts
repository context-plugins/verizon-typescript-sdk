import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { deviceIdSchema, type DeviceId } from "./device-id.js";
import { labelSchema, type Label } from "./label.js";

export type DeviceAggregateUsageListRequest = {
  startTime: string;
  endTime: string;
  deviceIds?: DeviceId[];
  accountName?: string;
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
