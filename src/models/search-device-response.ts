import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { fields2Schema, type Fields2 } from "./fields2.js";

/**
 * A success response includes an array of all matching events. Each event includes the full event
 * resource definition.
 */
export type SearchDeviceResponse = {
  /** The action requested in this event; “change” for device configuration changes. */
  action?: string;
  /** The date and time of the change request. */
  createdon?: string;
  /** The device’s ThingSpace UUID. */
  deviceid?: string;
  /** List of fields affected by the event. */
  fields?: Fields2;
  /** The unique ID of this ts.event.configuration event. */
  id?: string;
  /**
   * The kind of the ThingSpace resource that is being reported; “ts.event.configuration” for device
   * configuration changes.
   */
  kind?: string;
  /** The date and time that the event was last updated. */
  lastupdated?: string;
  /** The name of the event */
  name?: string;
  /** The current status of the request. */
  state?: string;
  /** UUIDs of tag resources that are applied to this device. */
  tagids?: string[];
  /** transaction id */
  transactionid?: string;
  /** The version of the resource. */
  version?: string;
  /** The version of the resource. */
  versionid?: string;
};

export const searchDeviceResponseSchema: Schema<SearchDeviceResponse> = s.object<SearchDeviceResponse>({
  action: s.optional(s.string()),
  createdon: s.optional(s.string()),
  deviceid: s.optional(s.string()),
  fields: s.optional(s.lazy(() => fields2Schema)),
  id: s.optional(s.string()),
  kind: s.optional(s.string()),
  lastupdated: s.optional(s.string()),
  name: s.optional(s.string()),
  state: s.optional(s.string()),
  tagids: s.optional(s.array(s.string())),
  transactionid: s.optional(s.string()),
  version: s.optional(s.string()),
  versionid: s.optional(s.string()),
});
