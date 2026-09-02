import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ManagementErrorError500 = {
  error?: string;
  errorDescription?: string;
  cause?: string;
};

export const managementErrorError500Schema: Schema<ManagementErrorError500> =
  s.object<ManagementErrorError500>({
    error: s.optional(s.string()),
    errorDescription: s.optional(s.string()),
    cause: s.optional(s.string()),
    _keysMap: {
      errorDescription: "error_description",
    },
  });
