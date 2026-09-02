import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { apiResponseCodeSchema, type ApiResponseCode } from "./api-response-code.js";
import { hplBullseyeEnableSchema, type HplBullseyeEnable } from "./hpl-bullseye-enable.js";

export type DeviceServiceInformation = {
  responseType?: ApiResponseCode;
  imei: string;
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
