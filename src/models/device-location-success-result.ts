import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DeviceLocationSuccessResult = {
  success?: boolean;
};

export const deviceLocationSuccessResultSchema: Schema<DeviceLocationSuccessResult> =
  s.object<DeviceLocationSuccessResult>({
    success: s.optional(s.boolean()),
  });
