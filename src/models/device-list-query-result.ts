import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { deviceListQueryItemSchema, type DeviceListQueryItem } from "./device-list-query-item.js";

export type DeviceListQueryResult = {
  accountName?: string;
  hasMoreData?: boolean;
  lastSeenDeviceId?: number;
  deviceList?: DeviceListQueryItem[];
};

export const deviceListQueryResultSchema: Schema<DeviceListQueryResult> = s.object<DeviceListQueryResult>({
  accountName: s.optional(s.string()),
  hasMoreData: s.optional(s.boolean()),
  lastSeenDeviceId: s.optional(s.number()),
  deviceList: s.optional(s.array(s.lazy(() => deviceListQueryItemSchema))),
});
