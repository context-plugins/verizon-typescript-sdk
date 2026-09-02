import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DeviceDiagnosticsResult = {
  errorCode: string;
  errorMessage: string;
};

export const deviceDiagnosticsResultSchema: Schema<DeviceDiagnosticsResult> =
  s.object<DeviceDiagnosticsResult>({
    errorCode: s.string(),
    errorMessage: s.string(),
  });
