import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type GioRestErrorResponseError = {
  errorCode?: string;
  errorMessage?: string;
};

export const gioRestErrorResponseErrorSchema: Schema<GioRestErrorResponseError> =
  s.object<GioRestErrorResponseError>({
    errorCode: s.optional(s.string()),
    errorMessage: s.optional(s.string()),
  });
