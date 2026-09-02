import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DefaultResponse = {
  errorCode?: string;
  errorMessage?: string;
};

export const defaultResponseSchema: Schema<DefaultResponse> = s.object<DefaultResponse>({
  errorCode: s.optional(s.string()),
  errorMessage: s.optional(s.string()),
});
