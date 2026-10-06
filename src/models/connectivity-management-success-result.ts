import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Response to successful request. */
export type ConnectivityManagementSuccessResult = {
  /** A value of “true” indicates that the device group was created successfully. */
  success?: boolean;
};

export const connectivityManagementSuccessResultSchema: Schema<ConnectivityManagementSuccessResult> =
  s.object<ConnectivityManagementSuccessResult>({
    success: s.optional(s.boolean()),
  });
