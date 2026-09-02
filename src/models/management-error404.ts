import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ManagementError404 = {
  error?: string;
  errorDescription?: string;
  cause?: string;
};

export const managementError404Schema: Schema<ManagementError404> = s.object<ManagementError404>({
  error: s.optional(s.string()),
  errorDescription: s.optional(s.string()),
  cause: s.optional(s.string()),
  _keysMap: {
    errorDescription: "error_description",
  },
});
