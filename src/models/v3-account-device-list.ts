import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { v3AccountDeviceSchema, type V3AccountDevice } from "./v3-account-device.js";

/** Array of devices. */
export type V3AccountDeviceList = {
  /** Account name. */
  accountName: string;
  /** Has more device flag? */
  hasMoreData: boolean;
  /** Last seen device identifier. */
  lastSeenDeviceId?: string;
  /** Maximum page size. */
  maxPageSize: number;
  /** Account device list. */
  deviceList: V3AccountDevice[];
};

export const v3AccountDeviceListSchema: Schema<V3AccountDeviceList> = s.object<V3AccountDeviceList>({
  accountName: s.string(),
  hasMoreData: s.boolean(),
  lastSeenDeviceId: s.optional(s.string()),
  maxPageSize: s.int(),
  deviceList: s.array(s.lazy(() => v3AccountDeviceSchema)),
});
