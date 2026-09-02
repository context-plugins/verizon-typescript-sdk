import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DeviceLocationResult = {
  errorCode: string;
  errorMessage: string;
};

export const deviceLocationResultSchema: Schema<DeviceLocationResult> = s.object<DeviceLocationResult>({
  errorCode: s.string(),
  errorMessage: s.string(),
});
