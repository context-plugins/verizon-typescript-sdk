import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type UserDeviceExperienceHistory = {
  /** The billing account ID. This is the same value as the Account ID */
  billingaccountid?: string;
  /** Timestamp of the record */
  createdon?: Date;
  /** Timestamp of the record */
  date?: Date;
  /**
   * This is a score based on combination of network coverage and network outage affecting the
   * device's ability to connect to the network. This is a count of devices that have failed
   */
  devicesbad?: number;
  /**
   * This is a score based on combination of network coverage and network outage affecting the
   * device's ability to connect to the network. This is a count of devices that are impaired
   */
  devicesfair?: number;
  /**
   * This is a score based on combination of network coverage and network outage affecting the
   * device's ability to connect to the network. This is a count of devices that have no issues
   */
  devicesgood?: number;
  /** A count of all devices */
  devicestotal?: number;
  /** UUID of the ECPD account the user belongs to */
  foreignid?: string;
  /** UUID of the user record, assigned at creation */
  id?: string;
  /** Timestamp of the record */
  lastupdated?: Date;
  /** The resource version */
  version?: string;
  /** The UUID of the resource version */
  versionid?: string;
};

export const userDeviceExperienceHistorySchema: Schema<UserDeviceExperienceHistory> =
  s.object<UserDeviceExperienceHistory>({
    billingaccountid: s.optional(s.string()),
    createdon: s.optional(s.dateTime()),
    date: s.optional(s.dateTime()),
    devicesbad: s.optional(s.int()),
    devicesfair: s.optional(s.int()),
    devicesgood: s.optional(s.int()),
    devicestotal: s.optional(s.int()),
    foreignid: s.optional(s.string()),
    id: s.optional(s.string()),
    lastupdated: s.optional(s.dateTime()),
    version: s.optional(s.string()),
    versionid: s.optional(s.string()),
  });
