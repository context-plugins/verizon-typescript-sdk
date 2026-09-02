import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DefaultResponseError = {
  errorCode?: string;
  errorMessage?: string;
};

export const defaultResponseErrorSchema: Schema<DefaultResponseError> = s.object<DefaultResponseError>({
  errorCode: s.optional(s.string()),
  errorMessage: s.optional(s.string()),
});
