import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { apiResponseCodeSchema, type ApiResponseCode } from "./api-response-code.js";
import {
  deviceServiceInformationSchema,
  type DeviceServiceInformation,
} from "./device-service-information.js";

/** Status of Hyper Precise Location on the device. */
export type BullseyeServiceResult = {
  /**
   * The numeric ID of the account and must include leading zeroes. This value is indentical to
   * `accountName`.
   */
  accountNumber?: string;
  /** List of devices. */
  deviceList?: DeviceServiceInformation[];
  /** ResponseCode and/or a message indicating success or failure of the request. */
  responseType?: ApiResponseCode;
};

export const bullseyeServiceResultSchema: Schema<BullseyeServiceResult> = s.object<BullseyeServiceResult>({
  accountNumber: s.optional(s.string()),
  deviceList: s.optional(s.array(s.lazy(() => deviceServiceInformationSchema))),
  responseType: s.optional(s.lazy(() => apiResponseCodeSchema)),
});
