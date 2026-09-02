import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ResourceRule = {
  accountclientid?: string;
  billingaccountid?: string;
  createdon: Date;
  description?: string;
  deviceid?: string;
  disabled?: boolean;
  foreignid: string;
  id?: string;
  lastupdated: Date;
  name?: string;
  rulechain: Record<string, unknown>;
  rulesyntax?: string;
  version?: string;
  versionid: string;
};

export const resourceRuleSchema: Schema<ResourceRule> = s.object<ResourceRule>({
  accountclientid: s.optional(s.string()),
  billingaccountid: s.optional(s.string()),
  createdon: s.dateTime(),
  description: s.optional(s.string()),
  deviceid: s.optional(s.string()),
  disabled: s.optional(s.boolean()),
  foreignid: s.string(),
  id: s.optional(s.string()),
  lastupdated: s.dateTime(),
  name: s.optional(s.string()),
  rulechain: s.record(s.string(), s.unknown()),
  rulesyntax: s.optional(s.string()),
  version: s.optional(s.string()),
  versionid: s.string(),
});
