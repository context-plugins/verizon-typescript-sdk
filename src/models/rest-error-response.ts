import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type RestErrorResponse = {
  errorCode?: string;
  errorMessage?: string;
};

export const restErrorResponseSchema: Schema<RestErrorResponse> = s.object<RestErrorResponse>({
  errorCode: s.optional(s.string()),
  errorMessage: s.optional(s.string()),
});
