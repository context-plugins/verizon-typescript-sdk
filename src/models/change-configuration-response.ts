import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { fieldsSchema, type Fields } from "./fields.js";

/** Change Configuration resource definition. */
export type ChangeConfigurationResponse = {
  /** The action requested in this event; “change” for device configuration changes. */
  action?: string;
  /** The date and time of the change request. */
  createdon?: string;
  /** The device’s ThingSpace UUID. */
  deviceid?: string;
  /** List of fields affected by the event. */
  fields?: Fields;
  /** foreign id */
  foreignid?: string;
  /** The unique ID of this ts.event.configuration event. */
  id?: string;
  /** The kind of the ThingSpace resource that is being reported */
  kind?: string;
  /** The date and time that the event was last updated. */
  lastupdated?: string;
  /** The name of the event; “SetConfigurationReq” for device configuration changes. */
  name?: string;
  /**
   * The current status of the request. The value will be “pending” until the device wakes up and
   * ThingSpace can send the request to the device.
   */
  state?: string;
  /** transaction id */
  transactionid?: string;
  /** version */
  version?: string;
};

export const changeConfigurationResponseSchema: Schema<ChangeConfigurationResponse> =
  s.object<ChangeConfigurationResponse>({
    action: s.optional(s.string()),
    createdon: s.optional(s.string()),
    deviceid: s.optional(s.string()),
    fields: s.optional(s.lazy(() => fieldsSchema)),
    foreignid: s.optional(s.string()),
    id: s.optional(s.string()),
    kind: s.optional(s.string()),
    lastupdated: s.optional(s.string()),
    name: s.optional(s.string()),
    state: s.optional(s.string()),
    transactionid: s.optional(s.string()),
    version: s.optional(s.string()),
  });
