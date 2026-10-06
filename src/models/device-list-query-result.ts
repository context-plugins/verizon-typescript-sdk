import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { deviceListQueryItemSchema, type DeviceListQueryItem } from "./device-list-query-item.js";

/** List of devices. */
export type DeviceListQueryResult = {
  /** Account identifier in "##########-#####". */
  accountName?: string;
  /** True if there are more devices to retrieve. */
  hasMoreData?: boolean;
  /** If hasMoreData=true, the startIndex to use for the next request. 0 if hasMoreData=false. */
  lastSeenDeviceId?: number;
  /** The list of devices in the account. */
  deviceList?: DeviceListQueryItem[];
};

export const deviceListQueryResultSchema: Schema<DeviceListQueryResult> = s.object<DeviceListQueryResult>({
  accountName: s.optional(s.string()),
  hasMoreData: s.optional(s.boolean()),
  lastSeenDeviceId: s.optional(s.int()),
  deviceList: s.optional(s.array(s.lazy(() => deviceListQueryItemSchema))),
});
