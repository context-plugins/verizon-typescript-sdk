import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Subscription = {
  configurationfailures?: number;
  createdon?: string;
  delegateid?: string;
  description?: string;
  disabled?: boolean;
  email?: string;
  filter?: string;
  id?: string;
  kind?: string;
  laststreamingstatus?: string;
  laststreamingtime?: string;
  lastupdated?: string;
  name?: string;
  networkfailures?: number;
  streamfailures?: number;
  streamkind?: string;
  targetid?: string;
  targettype?: string;
  version?: string;
  versionid?: string;
};

export const subscriptionSchema: Schema<Subscription> = s.object<Subscription>({
  configurationfailures: s.optional(s.number()),
  createdon: s.optional(s.string()),
  delegateid: s.optional(s.string()),
  description: s.optional(s.string()),
  disabled: s.optional(s.boolean()),
  email: s.optional(s.string()),
  filter: s.optional(s.string()),
  id: s.optional(s.string()),
  kind: s.optional(s.string()),
  laststreamingstatus: s.optional(s.string()),
  laststreamingtime: s.optional(s.string()),
  lastupdated: s.optional(s.string()),
  name: s.optional(s.string()),
  networkfailures: s.optional(s.number()),
  streamfailures: s.optional(s.number()),
  streamkind: s.optional(s.string()),
  targetid: s.optional(s.string()),
  targettype: s.optional(s.string()),
  version: s.optional(s.string()),
  versionid: s.optional(s.string()),
});
