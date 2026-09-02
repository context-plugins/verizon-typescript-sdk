import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DeviceDiagnosticsResultError = {
  errorCode: string;
  errorMessage: string;
};

export const deviceDiagnosticsResultErrorSchema: Schema<DeviceDiagnosticsResultError> =
  s.object<DeviceDiagnosticsResultError>({
    errorCode: s.string(),
    errorMessage: s.string(),
  });
