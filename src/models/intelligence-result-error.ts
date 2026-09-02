import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type IntelligenceResultError = {
  errorCode?: string;
  errorMessage?: string;
};

export const intelligenceResultErrorSchema: Schema<IntelligenceResultError> =
  s.object<IntelligenceResultError>({
    errorCode: s.optional(s.string()),
    errorMessage: s.optional(s.string()),
  });
