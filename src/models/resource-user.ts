import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ResourceUser = {
  /** Not used in this release, future functionality */
  accountclientid?: string;
  /** Indicates if terms are agreed to (true) or not */
  ackterms?: boolean;
  acktermson?: Date;
  /** The billing account ID. This is the same value as the Account ID */
  billingaccountid?: string;
  /** Timestamp of the record */
  createdon: Date;
  /** User credentials. The only valid value is an email address */
  credentialsid?: string;
  /** The type of credential represented by the ID. The only valid value is `email` */
  credentialstype: string;
  /**
   * Name/value pair, where the value is client defined. The purpose is to keep track of current
   * state per device action.
   */
  customdata?: Record<string, Record<string, unknown>>;
  /** a short description */
  description?: string;
  /** the user name value to display */
  displayname?: string;
  /** Contact email for the group */
  email?: string;
  /** The first name in the user record */
  firstname?: string;
  /** UUID of the ECPD account the user belongs to */
  foreignid: string;
  /** UUID of the user record, assigned at creation */
  id?: string;
  /** The last name in the user record */
  lastname?: string;
  /** Timestamp of the record */
  lastupdated: Date;
  /** The Mobile Directory Number */
  mdn?: string;
  /** optional field for middle name or initial */
  middlename?: string;
  /** User defined name of the record */
  name?: string;
  /** Virtual field; will not be used in this implementation */
  secondarybillingaccountids?: string[];
  /** The current status of the device or transaction and will be `success` or `failed` */
  state?: string;
  /** The resource version */
  version?: string;
  /** The UUID of the resource version */
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
