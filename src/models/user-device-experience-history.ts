import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type UserDeviceExperienceHistory = {
  billingaccountid?: string;
  createdon?: Date;
  date?: Date;
  devicesbad?: number;
  devicesfair?: number;
  devicesgood?: number;
  devicestotal?: number;
  foreignid?: string;
  id?: string;
  lastupdated?: Date;
  version?: string;
  versionid?: string;
};

export const userDeviceExperienceHistorySchema: Schema<UserDeviceExperienceHistory> =
  s.object<UserDeviceExperienceHistory>({
    billingaccountid: s.optional(s.string()),
    createdon: s.optional(s.dateTime()),
    date: s.optional(s.dateTime()),
    devicesbad: s.optional(s.number()),
    devicesfair: s.optional(s.number()),
    devicesgood: s.optional(s.number()),
    devicestotal: s.optional(s.number()),
    foreignid: s.optional(s.string()),
    id: s.optional(s.string()),
    lastupdated: s.optional(s.dateTime()),
    version: s.optional(s.string()),
    versionid: s.optional(s.string()),
  });
