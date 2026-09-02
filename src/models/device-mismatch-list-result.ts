import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { mismatchedDeviceSchema, type MismatchedDevice } from "./mismatched-device.js";

export type DeviceMismatchListResult = {
  devices?: MismatchedDevice[];
};

export const deviceMismatchListResultSchema: Schema<DeviceMismatchListResult> =
  s.object<DeviceMismatchListResult>({
    devices: s.optional(s.array(s.lazy(() => mismatchedDeviceSchema))),
  });
