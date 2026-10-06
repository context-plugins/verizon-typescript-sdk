import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { v2AccountDeviceSchema, type V2AccountDevice } from "./v2-account-device.js";

/** List of device information for an account. */
export type V2AccountDeviceList = {
  /** Account name. */
  accountName: string;
  /** Has more device flag? */
  hasMoreData: boolean;
  /** Last seen device identifier. */
  lastSeenDeviceId?: string;
  /** Maximum page size. */
  maxPageSize: number;
  /** Account device list. */
  deviceList: V2AccountDevice[];
};

export const v2AccountDeviceListSchema: Schema<V2AccountDeviceList> = s.object<V2AccountDeviceList>({
  accountName: s.string(),
  hasMoreData: s.boolean(),
  lastSeenDeviceId: s.optional(s.string()),
  maxPageSize: s.int(),
  deviceList: s.array(s.lazy(() => v2AccountDeviceSchema)),
});
