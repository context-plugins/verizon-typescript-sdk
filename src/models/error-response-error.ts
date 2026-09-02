import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ErrorResponseError = {
  responseCode?: string;
  message?: string;
};

export const errorResponseErrorSchema: Schema<ErrorResponseError> = s.object<ErrorResponseError>({
  responseCode: s.optional(s.string()),
  message: s.optional(s.string()),
});
