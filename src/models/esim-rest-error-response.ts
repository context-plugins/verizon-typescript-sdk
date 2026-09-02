import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ESimRestErrorResponse = {
  errorCode?: string;
  errorMessage?: string;
};

export const eSimRestErrorResponseSchema: Schema<ESimRestErrorResponse> = s.object<ESimRestErrorResponse>({
  errorCode: s.optional(s.string()),
  errorMessage: s.optional(s.string()),
});
