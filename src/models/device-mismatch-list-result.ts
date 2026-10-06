import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { mismatchedDeviceSchema, type MismatchedDevice } from "./mismatched-device.js";

/**
 * Response to list of all 4G devices with an ICCID (SIM) that was not activated with the expected
 * IMEI (hardware) during a specified time frame.
 */
export type DeviceMismatchListResult = {
  /** A list of specific devices that you want to check, specified by ICCID or MDN. */
  devices?: MismatchedDevice[];
};

export const deviceMismatchListResultSchema: Schema<DeviceMismatchListResult> =
  s.object<DeviceMismatchListResult>({
    devices: s.optional(s.array(s.lazy(() => mismatchedDeviceSchema))),
  });
