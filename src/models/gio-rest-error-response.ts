import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type GioRestErrorResponse = {
  errorCode?: string;
  errorMessage?: string;
};

export const gioRestErrorResponseSchema: Schema<GioRestErrorResponse> = s.object<GioRestErrorResponse>({
  errorCode: s.optional(s.string()),
  errorMessage: s.optional(s.string()),
});
