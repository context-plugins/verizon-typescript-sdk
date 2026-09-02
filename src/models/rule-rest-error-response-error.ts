import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type RuleRestErrorResponseError = {
  errorCode?: string;
  errorMessage?: string;
};

export const ruleRestErrorResponseErrorSchema: Schema<RuleRestErrorResponseError> =
  s.object<RuleRestErrorResponseError>({
    errorCode: s.optional(s.string()),
    errorMessage: s.optional(s.string()),
  });
