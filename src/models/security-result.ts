import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SecurityResult = {
  errorCode?: string;
  errorMessage?: string;
  errorUrl?: string;
};

export const securityResultSchema: Schema<SecurityResult> = s.object<SecurityResult>({
  errorCode: s.optional(s.string()),
  errorMessage: s.optional(s.string()),
  errorUrl: s.optional(s.string()),
});
