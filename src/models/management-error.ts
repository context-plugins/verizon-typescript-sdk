import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ManagementError = {
  error?: string;
  errorDescription?: string;
  cause?: string;
};

export const managementErrorSchema: Schema<ManagementError> = s.object<ManagementError>({
  error: s.optional(s.string()),
  errorDescription: s.optional(s.string()),
  cause: s.optional(s.string()),
  _keysMap: {
    errorDescription: "error_description",
  },
});
