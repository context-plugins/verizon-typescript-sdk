import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { deviceListSchema, type DeviceList } from "./device-list.js";

export type CheckOrderStatusRequest = {
  accountName: string;
  orderRequestId?: string;
  devices: DeviceList[];
};

export const checkOrderStatusRequestSchema: Schema<CheckOrderStatusRequest> =
  s.object<CheckOrderStatusRequest>({
    accountName: s.string(),
    orderRequestId: s.optional(s.string()),
    devices: s.array(s.lazy(() => deviceListSchema)),
  });
