import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { v2AccountDeviceSchema, type V2AccountDevice } from "./v2-account-device.js";

export type V2AccountDeviceList = {
  accountName: string;
  hasMoreData: boolean;
  lastSeenDeviceId?: string;
  maxPageSize: number;
  deviceList: V2AccountDevice[];
};

export const v2AccountDeviceListSchema: Schema<V2AccountDeviceList> = s.object<V2AccountDeviceList>({
  accountName: s.string(),
  hasMoreData: s.boolean(),
  lastSeenDeviceId: s.optional(s.string()),
  maxPageSize: s.number(),
  deviceList: s.array(s.lazy(() => v2AccountDeviceSchema)),
});
