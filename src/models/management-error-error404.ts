import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ManagementErrorError404 = {
  error?: string;
  errorDescription?: string;
  cause?: string;
};

export const managementErrorError404Schema: Schema<ManagementErrorError404> =
  s.object<ManagementErrorError404>({
    error: s.optional(s.string()),
    errorDescription: s.optional(s.string()),
    cause: s.optional(s.string()),
    _keysMap: {
      errorDescription: "error_description",
    },
  });
