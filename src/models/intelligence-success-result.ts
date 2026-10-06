import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Success response. */
export type IntelligenceSuccessResult = {
  /** Anomaly detection status. */
  status?: string;
};

export const intelligenceSuccessResultSchema: Schema<IntelligenceSuccessResult> =
  s.object<IntelligenceSuccessResult>({
    status: s.optional(s.string()),
  });
