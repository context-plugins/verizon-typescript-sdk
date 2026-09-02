import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ConnectivityManagementResult = {
  errorCode?: string;
  errorMessage?: string;
};

export const connectivityManagementResultSchema: Schema<ConnectivityManagementResult> =
  s.object<ConnectivityManagementResult>({
    errorCode: s.optional(s.string()),
    errorMessage: s.optional(s.string()),
  });
