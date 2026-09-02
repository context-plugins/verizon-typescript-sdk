import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ConnectivityManagementSuccessResult = {
  success?: boolean;
};

export const connectivityManagementSuccessResultSchema: Schema<ConnectivityManagementSuccessResult> =
  s.object<ConnectivityManagementSuccessResult>({
    success: s.optional(s.boolean()),
  });
