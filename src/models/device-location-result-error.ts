import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Will be empty if there was no error. */
export type DeviceLocationResultError = {
  errorCode: string;
  errorMessage: string;
};

export const deviceLocationResultErrorSchema: Schema<DeviceLocationResultError> =
  s.object<DeviceLocationResultError>({
    errorCode: s.string(),
    errorMessage: s.string(),
  });
