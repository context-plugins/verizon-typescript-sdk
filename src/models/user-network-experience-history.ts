import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type UserNetworkExperienceHistory = {
  billingaccountid?: string;
  createdon?: Date;
  date?: Date;
  devicesbad?: number;
  devicesfair?: number;
  devicesgood?: number;
  devicestotal?: number;
  foreignid?: string;
  hours?: number;
  id?: string;
  lastupdated?: Date;
  minutes?: number;
  version?: string;
  versionid?: string;
};

export const userNetworkExperienceHistorySchema: Schema<UserNetworkExperienceHistory> =
  s.object<UserNetworkExperienceHistory>({
    billingaccountid: s.optional(s.string()),
    createdon: s.optional(s.dateTime()),
    date: s.optional(s.dateTime()),
    devicesbad: s.optional(s.number()),
    devicesfair: s.optional(s.number()),
    devicesgood: s.optional(s.number()),
    devicestotal: s.optional(s.number()),
    foreignid: s.optional(s.string()),
    hours: s.optional(s.number()),
    id: s.optional(s.string()),
    lastupdated: s.optional(s.dateTime()),
    minutes: s.optional(s.number()),
    version: s.optional(s.string()),
    versionid: s.optional(s.string()),
  });
