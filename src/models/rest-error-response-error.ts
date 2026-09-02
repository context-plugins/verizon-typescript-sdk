import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type RestErrorResponseError = {
  errorCode?: string;
  errorMessage?: string;
};

export const restErrorResponseErrorSchema: Schema<RestErrorResponseError> = s.object<RestErrorResponseError>({
  errorCode: s.optional(s.string()),
  errorMessage: s.optional(s.string()),
});
