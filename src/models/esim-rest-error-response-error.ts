import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ESimRestErrorResponseError = {
  errorCode?: string;
  errorMessage?: string;
};

export const eSimRestErrorResponseErrorSchema: Schema<ESimRestErrorResponseError> =
  s.object<ESimRestErrorResponseError>({
    errorCode: s.optional(s.string()),
    errorMessage: s.optional(s.string()),
  });
