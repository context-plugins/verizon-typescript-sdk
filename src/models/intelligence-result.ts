import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** An error occurred. */
export type IntelligenceResult = {
  /** The 3-digit HTML error code. */
  errorCode?: string;
  /** Error Message. */
  errorMessage?: string;
};

export const intelligenceResultSchema: Schema<IntelligenceResult> = s.object<IntelligenceResult>({
  errorCode: s.optional(s.string()),
  errorMessage: s.optional(s.string()),
});
