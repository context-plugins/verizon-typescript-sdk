import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** An error occurred. */
export type IntelligenceResultError = {
  /** The 3-digit HTML error code. */
  errorCode?: string;
  /** Error Message. */
  errorMessage?: string;
};

export const intelligenceResultErrorSchema: Schema<IntelligenceResultError> =
  s.object<IntelligenceResultError>({
    errorCode: s.optional(s.string()),
    errorMessage: s.optional(s.string()),
  });
