import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { customFieldsSchema, type CustomFields } from "./custom-fields.js";

export type ConnectionEvent = {
  connectionEventAttributes?: CustomFields[];
  extendedAttributes?: CustomFields[];
  occurredAt?: string;
};

export const connectionEventSchema: Schema<ConnectionEvent> = s.object<ConnectionEvent>({
  connectionEventAttributes: s.optional(s.array(s.lazy(() => customFieldsSchema))),
  extendedAttributes: s.optional(s.array(s.lazy(() => customFieldsSchema))),
  occurredAt: s.optional(s.string()),
});
