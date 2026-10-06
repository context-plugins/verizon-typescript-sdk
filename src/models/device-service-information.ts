import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { apiResponseCodeSchema, type ApiResponseCode } from "./api-response-code.js";
import { hplBullseyeEnableSchema, type HplBullseyeEnable } from "./hpl-bullseye-enable.js";

/** Device service information. */
export type DeviceServiceInformation = {
  /** ResponseCode and/or a message indicating success or failure of the request. */
  responseType?: ApiResponseCode;
  /** The International Mobile Equipment Identifier of the device. */
  imei: string;
  /** A flag that shows if Hyper Precise is enabled (true) or disabled (false). */
  bullseyeEnable: HplBullseyeEnable;
};

export const deviceServiceInformationSchema: Schema<DeviceServiceInformation> =
  s.object<DeviceServiceInformation>({
    responseType: s.optional(s.lazy(() => apiResponseCodeSchema)),
    imei: s.string(),
    bullseyeEnable: hplBullseyeEnableSchema,
    _keysMap: {
      bullseyeEnable: "BullseyeEnable",
    },
  });
