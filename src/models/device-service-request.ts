import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { hplBullseyeEnableSchema, type HplBullseyeEnable } from "./hpl-bullseye-enable.js";

export type DeviceServiceRequest = {
  imei: string;
  bullseyeEnable: HplBullseyeEnable;
};

export const deviceServiceRequestSchema: Schema<DeviceServiceRequest> = s.object<DeviceServiceRequest>({
  imei: s.string(),
  bullseyeEnable: hplBullseyeEnableSchema,
  _keysMap: {
    bullseyeEnable: "BullseyeEnable",
  },
});
