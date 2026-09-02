import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ManagementErrorError403 = {
  error?: string;
  errorDescription?: string;
  cause?: string;
};

export const managementErrorError403Schema: Schema<ManagementErrorError403> =
  s.object<ManagementErrorError403>({
    error: s.optional(s.string()),
    errorDescription: s.optional(s.string()),
    cause: s.optional(s.string()),
    _keysMap: {
      errorDescription: "error_description",
    },
  });
