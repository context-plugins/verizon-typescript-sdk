import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ResourceUser = {
  accountclientid?: string;
  ackterms?: boolean;
  acktermson?: Date;
  billingaccountid?: string;
  createdon: Date;
  credentialsid?: string;
  credentialstype: string;
  customdata?: Record<string, Record<string, unknown>>;
  description?: string;
  displayname?: string;
  email?: string;
  firstname?: string;
  foreignid: string;
  id?: string;
  lastname?: string;
  lastupdated: Date;
  mdn?: string;
  middlename?: string;
  name?: string;
  secondarybillingaccountids?: string[];
  state?: string;
  version?: string;
  versionid: string;
};

export const resourceUserSchema: Schema<ResourceUser> = s.object<ResourceUser>({
  accountclientid: s.optional(s.string()),
  ackterms: s.optional(s.boolean()),
  acktermson: s.optional(s.dateTime()),
  billingaccountid: s.optional(s.string()),
  createdon: s.dateTime(),
  credentialsid: s.optional(s.string()),
  credentialstype: s.string(),
  customdata: s.optional(s.record(s.string(), s.record(s.string(), s.unknown()))),
  description: s.optional(s.string()),
  displayname: s.optional(s.string()),
  email: s.optional(s.string()),
  firstname: s.optional(s.string()),
  foreignid: s.string(),
  id: s.optional(s.string()),
  lastname: s.optional(s.string()),
  lastupdated: s.dateTime(),
  mdn: s.optional(s.string()),
  middlename: s.optional(s.string()),
  name: s.optional(s.string()),
  secondarybillingaccountids: s.optional(s.array(s.string())),
  state: s.optional(s.string()),
  version: s.optional(s.string()),
  versionid: s.string(),
});
