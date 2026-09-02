import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ManagementError403 = {
  error?: string;
  errorDescription?: string;
  cause?: string;
};

export const managementError403Schema: Schema<ManagementError403> = s.object<ManagementError403>({
  error: s.optional(s.string()),
  errorDescription: s.optional(s.string()),
  cause: s.optional(s.string()),
  _keysMap: {
    errorDescription: "error_description",
  },
});
