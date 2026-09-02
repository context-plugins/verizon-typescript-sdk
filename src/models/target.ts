import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Target = {
  address?: string;
  addressscheme?: string;
  billingaccountid?: string;
  createdon?: string;
  externalid?: string;
  id?: string;
  kind?: string;
  lastupdated?: string;
  name?: string;
  region?: string;
  version?: string;
  versionid?: string;
  description?: string;
};

export const targetSchema: Schema<Target> = s.object<Target>({
  address: s.optional(s.string()),
  addressscheme: s.optional(s.string()),
  billingaccountid: s.optional(s.string()),
  createdon: s.optional(s.string()),
  externalid: s.optional(s.string()),
  id: s.optional(s.string()),
  kind: s.optional(s.string()),
  lastupdated: s.optional(s.string()),
  name: s.optional(s.string()),
  region: s.optional(s.string()),
  version: s.optional(s.string()),
  versionid: s.optional(s.string()),
  description: s.optional(s.string()),
});
