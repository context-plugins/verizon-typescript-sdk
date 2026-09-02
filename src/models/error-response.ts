import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ErrorResponse = {
  responseCode?: string;
  message?: string;
};

export const errorResponseSchema: Schema<ErrorResponse> = s.object<ErrorResponse>({
  responseCode: s.optional(s.string()),
  message: s.optional(s.string()),
});
