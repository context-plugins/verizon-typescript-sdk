import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ManagementErrorError = {
  error?: string;
  errorDescription?: string;
  cause?: string;
};

export const managementErrorErrorSchema: Schema<ManagementErrorError> = s.object<ManagementErrorError>({
  error: s.optional(s.string()),
  errorDescription: s.optional(s.string()),
  cause: s.optional(s.string()),
  _keysMap: {
    errorDescription: "error_description",
  },
});
