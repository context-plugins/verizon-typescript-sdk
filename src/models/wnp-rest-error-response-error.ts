import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type WnpRestErrorResponseError = {
  errorCode?: string;
  errorMessage?: string;
};

export const wnpRestErrorResponseErrorSchema: Schema<WnpRestErrorResponseError> =
  s.object<WnpRestErrorResponseError>({
    errorCode: s.optional(s.string()),
    errorMessage: s.optional(s.string()),
  });
