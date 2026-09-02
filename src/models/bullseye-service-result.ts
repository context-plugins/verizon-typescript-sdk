import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { apiResponseCodeSchema, type ApiResponseCode } from "./api-response-code.js";
import {
  deviceServiceInformationSchema,
  type DeviceServiceInformation,
} from "./device-service-information.js";

export type BullseyeServiceResult = {
  accountNumber?: string;
  deviceList?: DeviceServiceInformation[];
  responseType?: ApiResponseCode;
};

export const bullseyeServiceResultSchema: Schema<BullseyeServiceResult> = s.object<BullseyeServiceResult>({
  accountNumber: s.optional(s.string()),
  deviceList: s.optional(s.array(s.lazy(() => deviceServiceInformationSchema))),
  responseType: s.optional(s.lazy(() => apiResponseCodeSchema)),
});
