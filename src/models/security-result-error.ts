import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SecurityResultError = {
  errorCode?: string;
  errorMessage?: string;
  errorUrl?: string;
};

export const securityResultErrorSchema: Schema<SecurityResultError> = s.object<SecurityResultError>({
  errorCode: s.optional(s.string()),
  errorMessage: s.optional(s.string()),
  errorUrl: s.optional(s.string()),
});
