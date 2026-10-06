import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Wireless network performance rest error response. */
export type WnpRestErrorResponseError = {
  /** Rest error response. */
  errorCode?: string;
  /** Error message details. */
  errorMessage?: string;
};

export const wnpRestErrorResponseErrorSchema: Schema<WnpRestErrorResponseError> =
  s.object<WnpRestErrorResponseError>({
    errorCode: s.optional(s.string()),
    errorMessage: s.optional(s.string()),
  });
