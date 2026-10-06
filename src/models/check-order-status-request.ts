import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { deviceListSchema, type DeviceList } from "./device-list.js";

/** The request body identifies the devices to upload. */
export type CheckOrderStatusRequest = {
  /**
   * The name of a billing account. An account name is usually numeric, and must include any leading
   * zeros.
   */
  accountName: string;
  /** The request id from the activation order. */
  orderRequestId?: string;
  /** The devices to upload, specified by device IDs in a format matching uploadType. */
  devices: DeviceList[];
};

export const checkOrderStatusRequestSchema: Schema<CheckOrderStatusRequest> =
  s.object<CheckOrderStatusRequest>({
    accountName: s.string(),
    orderRequestId: s.optional(s.string()),
    devices: s.array(s.lazy(() => deviceListSchema)),
  });
