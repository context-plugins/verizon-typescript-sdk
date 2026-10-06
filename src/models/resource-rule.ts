import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ResourceRule = {
  /** Not used in this release, future functionality */
  accountclientid?: string;
  /** The billing account ID. This is the same value as the Account ID */
  billingaccountid?: string;
  /** Timestamp of the record */
  createdon: Date;
  /** a short description */
  description?: string;
  /** This is a UUID value of the device created when the device is onboarded */
  deviceid?: string;
  disabled?: boolean;
  /** UUID of the ECPD account the user belongs to */
  foreignid: string;
  /** UUID of the user record, assigned at creation */
  id?: string;
  /** Timestamp of the record */
  lastupdated: Date;
  /** User defined name of the record */
  name?: string;
  rulechain: Record<string, unknown>;
  /** The syntax of the rule and supports camel and json style syntaxes */
  rulesyntax?: string;
  /** The resource version */
  version?: string;
  /** The UUID of the resource version */
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
