import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Response to errors. */
export type ConnectivityManagementResult = {
  /** Code of the error. */
  errorCode?: string;
  /** Details of the error. */
  errorMessage?: string;
};

export const connectivityManagementResultSchema: Schema<ConnectivityManagementResult> =
  s.object<ConnectivityManagementResult>({
    errorCode: s.optional(s.string()),
    errorMessage: s.optional(s.string()),
  });
