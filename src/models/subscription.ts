import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Subscription resource definition. */
export type Subscription = {
  /** The number of streaming failures due to faulty configuration. */
  configurationfailures?: number;
  /** The number of streaming failures due to faulty configuration. */
  createdon?: string;
  /** Not currently used. */
  delegateid?: string;
  /** Description of the subscription. */
  description?: string;
  /** Whether the subscription is currently sending data. */
  disabled?: boolean;
  /** The address to which any error reports should be delivered. */
  email?: string;
  /** Filter for events. */
  filter?: string;
  /** ThingSpace unique ID for the subscription that was created. */
  id?: string;
  /** Identifies the resource kind. */
  kind?: string;
  /** Possible values: success or fail. */
  laststreamingstatus?: string;
  /** The date and time that the last stream send was attempted. */
  laststreamingtime?: string;
  /** The date the resource was last updated. */
  lastupdated?: string;
  /** Name of the subscription. */
  name?: string;
  /** The number of failures due to network problems. */
  networkfailures?: number;
  streamfailures?: number;
  /** The event type that will be sent in the data stream. */
  streamkind?: string;
  /** Target to be used for dispatching events. */
  targetid?: string;
  targettype?: string;
  /** Version of the underlying schema resource. */
  version?: string;
  /** The version of the resource. */
  versionid?: string;
};

export const subscriptionSchema: Schema<Subscription> = s.object<Subscription>({
  configurationfailures: s.optional(s.int()),
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
  networkfailures: s.optional(s.int()),
  streamfailures: s.optional(s.int()),
  streamkind: s.optional(s.string()),
  targetid: s.optional(s.string()),
  targettype: s.optional(s.string()),
  version: s.optional(s.string()),
  versionid: s.optional(s.string()),
});
