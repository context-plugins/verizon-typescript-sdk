import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type RuleRestErrorResponse = {
  errorCode?: string;
  errorMessage?: string;
};

export const ruleRestErrorResponseSchema: Schema<RuleRestErrorResponse> = s.object<RuleRestErrorResponse>({
  errorCode: s.optional(s.string()),
  errorMessage: s.optional(s.string()),
});
