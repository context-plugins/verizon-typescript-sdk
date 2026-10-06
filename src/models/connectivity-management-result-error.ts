import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Response to errors. */
export type ConnectivityManagementResultError = {
  /** Code of the error. */
  errorCode?: string;
  /** Details of the error. */
  errorMessage?: string;
};

export const connectivityManagementResultErrorSchema: Schema<ConnectivityManagementResultError> =
  s.object<ConnectivityManagementResultError>({
    errorCode: s.optional(s.string()),
    errorMessage: s.optional(s.string()),
  });
