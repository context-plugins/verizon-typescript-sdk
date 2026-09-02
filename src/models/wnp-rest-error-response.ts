import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type WnpRestErrorResponse = {
  errorCode?: string;
  errorMessage?: string;
};

export const wnpRestErrorResponseSchema: Schema<WnpRestErrorResponse> = s.object<WnpRestErrorResponse>({
  errorCode: s.optional(s.string()),
  errorMessage: s.optional(s.string()),
});
