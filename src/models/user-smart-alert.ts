import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type UserSmartAlert = {
  accountclientid?: string;
  billingaccountid?: string;
  category?: string;
  condition?: number;
  createdon: Date;
  description?: string;
  deviceid?: string;
  foreignid?: string;
  id?: string;
  isacknowledged?: boolean;
  iscleared?: boolean;
  isdisabled?: boolean;
  lastupdated: Date;
  name?: string;
  ruleid?: string;
  severity?: string;
  state?: string;
  template?: string;
  version?: string;
  versionid: string;
};

export const userSmartAlertSchema: Schema<UserSmartAlert> = s.object<UserSmartAlert>({
  accountclientid: s.optional(s.string()),
  billingaccountid: s.optional(s.string()),
  category: s.optional(s.string()),
  condition: s.optional(s.number()),
  createdon: s.dateTime(),
  description: s.optional(s.string()),
  deviceid: s.optional(s.string()),
  foreignid: s.optional(s.string()),
  id: s.optional(s.string()),
  isacknowledged: s.optional(s.boolean()),
  iscleared: s.optional(s.boolean()),
  isdisabled: s.optional(s.boolean()),
  lastupdated: s.dateTime(),
  name: s.optional(s.string()),
  ruleid: s.optional(s.string()),
  severity: s.optional(s.string()),
  state: s.optional(s.string()),
  template: s.optional(s.string()),
  version: s.optional(s.string()),
  versionid: s.string(),
});
