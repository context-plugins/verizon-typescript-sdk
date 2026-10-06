import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type UserSmartAlert = {
  /** Not used in this release, future functionality */
  accountclientid?: string;
  /** The billing account ID. This is the same value as the Account ID */
  billingaccountid?: string;
  /** The type of alert and will be either `telemetry` or `infrastructure` */
  category?: string;
  /** The condition or threshold for an alert */
  condition?: number;
  /** Timestamp of the record */
  createdon: Date;
  /** a short description */
  description?: string;
  /** This is a UUID value of the device created when the device is onboarded */
  deviceid?: string;
  /** UUID of the ECPD account the user belongs to */
  foreignid?: string;
  /** UUID of the user record, assigned at creation */
  id?: string;
  /** A flag that indicates if the alarm has been acknowledged */
  isacknowledged?: boolean;
  /** A flag that indicates if the alarm has been cleared */
  iscleared?: boolean;
  /** A flag that indicates if the alarm has been disabled */
  isdisabled?: boolean;
  /** Timestamp of the record */
  lastupdated: Date;
  /** User defined name of the record */
  name?: string;
  /** The UUID of a rule for alerts */
  ruleid?: string;
  /** The threshold value to trigger an alert and will be Critical, Major or Minor */
  severity?: string;
  /** The current status of the device or transaction and will be `success` or `failed` */
  state?: string;
  /** template of the rule which triggered a given alert */
  template?: string;
  /** The resource version */
  version?: string;
  /** The UUID of the resource version */
  versionid: string;
};

export const userSmartAlertSchema: Schema<UserSmartAlert> = s.object<UserSmartAlert>({
  accountclientid: s.optional(s.string()),
  billingaccountid: s.optional(s.string()),
  category: s.optional(s.string()),
  condition: s.optional(s.int()),
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
