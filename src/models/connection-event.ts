import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { customFieldsSchema, type CustomFields } from "./custom-fields.js";

/** Network connection events for a device during a specified time period. */
export type ConnectionEvent = {
  /** The attributes that describe the connection event. */
  connectionEventAttributes?: CustomFields[];
  /** Currently not used. */
  extendedAttributes?: CustomFields[];
  /** The date and time when the connection event occured. */
  occurredAt?: string;
};

export const connectionEventSchema: Schema<ConnectionEvent> = s.object<ConnectionEvent>({
  connectionEventAttributes: s.optional(s.array(s.lazy(() => customFieldsSchema))),
  extendedAttributes: s.optional(s.array(s.lazy(() => customFieldsSchema))),
  occurredAt: s.optional(s.string()),
});
