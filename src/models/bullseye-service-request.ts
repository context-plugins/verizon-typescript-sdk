import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { deviceServiceRequestSchema, type DeviceServiceRequest } from "./device-service-request.js";

/** Account number and list of devices. */
export type BullseyeServiceRequest = {
  /** A list of devices. */
  deviceList: DeviceServiceRequest[];
  /**
   * The numeric ID of the account and must include leading zeroes. This value is indentical to
   * `accountName`.
   */
  accountNumber: string;
};

export const bullseyeServiceRequestSchema: Schema<BullseyeServiceRequest> = s.object<BullseyeServiceRequest>({
  deviceList: s.array(s.lazy(() => deviceServiceRequestSchema)),
  accountNumber: s.string(),
});
