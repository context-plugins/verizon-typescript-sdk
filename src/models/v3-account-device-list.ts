import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { v3AccountDeviceSchema, type V3AccountDevice } from "./v3-account-device.js";

export type V3AccountDeviceList = {
  accountName: string;
  hasMoreData: boolean;
  lastSeenDeviceId?: string;
  maxPageSize: number;
  deviceList: V3AccountDevice[];
};

export const v3AccountDeviceListSchema: Schema<V3AccountDeviceList> = s.object<V3AccountDeviceList>({
  accountName: s.string(),
  hasMoreData: s.boolean(),
  lastSeenDeviceId: s.optional(s.string()),
  maxPageSize: s.number(),
  deviceList: s.array(s.lazy(() => v3AccountDeviceSchema)),
});
