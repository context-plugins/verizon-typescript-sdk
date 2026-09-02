import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type IntelligenceSuccessResult = {
  status?: string;
};

export const intelligenceSuccessResultSchema: Schema<IntelligenceSuccessResult> =
  s.object<IntelligenceSuccessResult>({
    status: s.optional(s.string()),
  });
