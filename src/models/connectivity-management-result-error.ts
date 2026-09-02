import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ConnectivityManagementResultError = {
  errorCode?: string;
  errorMessage?: string;
};

export const connectivityManagementResultErrorSchema: Schema<ConnectivityManagementResultError> =
  s.object<ConnectivityManagementResultError>({
    errorCode: s.optional(s.string()),
    errorMessage: s.optional(s.string()),
  });
