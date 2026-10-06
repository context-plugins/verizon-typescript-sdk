import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { hplBullseyeEnableSchema, type HplBullseyeEnable } from "./hpl-bullseye-enable.js";

/** Device information. */
export type DeviceServiceRequest = {
  /** The International Mobile Equipment Identifier of the device. */
  imei: string;
  /** A flag that shows if Hyper Precise is enabled (true) or disabled (false). */
  bullseyeEnable: HplBullseyeEnable;
};

export const deviceServiceRequestSchema: Schema<DeviceServiceRequest> = s.object<DeviceServiceRequest>({
  imei: s.string(),
  bullseyeEnable: hplBullseyeEnableSchema,
  _keysMap: {
    bullseyeEnable: "BullseyeEnable",
  },
});
