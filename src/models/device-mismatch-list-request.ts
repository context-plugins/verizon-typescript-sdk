import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accountDeviceListSchema, type AccountDeviceList } from "./account-device-list.js";
import { dateFilterSchema, type DateFilter } from "./date-filter.js";

export type DeviceMismatchListRequest = {
  filter: DateFilter;
  devices?: AccountDeviceList[];
  accountName?: string;
  groupName?: string;
};

export const deviceMismatchListRequestSchema: Schema<DeviceMismatchListRequest> =
  s.object<DeviceMismatchListRequest>({
    filter: dateFilterSchema,
    devices: s.optional(s.array(s.lazy(() => accountDeviceListSchema))),
    accountName: s.optional(s.string()),
    groupName: s.optional(s.string()),
  });
