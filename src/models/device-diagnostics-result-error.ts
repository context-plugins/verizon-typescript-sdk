import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * All error messages are returned in this format. Error codes and messages are listed on the Error
 * Codes page, along with explanations and suggestions for corrective actions.
 */
export type DeviceDiagnosticsResultError = {
  /** Simple error code. */
  errorCode: string;
  /** Detailed error message. */
  errorMessage: string;
};

export const deviceDiagnosticsResultErrorSchema: Schema<DeviceDiagnosticsResultError> =
  s.object<DeviceDiagnosticsResultError>({
    errorCode: s.string(),
    errorMessage: s.string(),
  });
