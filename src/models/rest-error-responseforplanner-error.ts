import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type RestErrorResponseforplannerError = {
  errorCode?: string;
  errorMessage?: string;
  errorUrl?: string;
};

export const restErrorResponseforplannerErrorSchema: Schema<RestErrorResponseforplannerError> =
  s.object<RestErrorResponseforplannerError>({
    errorCode: s.optional(s.string()),
    errorMessage: s.optional(s.string()),
    errorUrl: s.optional(s.string()),
  });
