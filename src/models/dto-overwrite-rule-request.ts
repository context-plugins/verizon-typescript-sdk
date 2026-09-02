import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { dtoResourceidentifierSchema, type DtoResourceidentifier } from "./dto-resourceidentifier.js";
import { resourceRuleSchema, type ResourceRule } from "./resource-rule.js";

export type DtoOverwriteRuleRequest = {
  accountname?: string;
  resourceidentifier?: DtoResourceidentifier;
  rule?: ResourceRule;
};

export const dtoOverwriteRuleRequestSchema: Schema<DtoOverwriteRuleRequest> =
  s.object<DtoOverwriteRuleRequest>({
    accountname: s.optional(s.string()),
    resourceidentifier: s.optional(s.lazy(() => dtoResourceidentifierSchema)),
    rule: s.optional(s.lazy(() => resourceRuleSchema)),
  });
