import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { customFieldsSchema, type CustomFields } from "./custom-fields.js";

export type Usage = {
  bytesUsed?: number;
  extendedAttributes?: CustomFields[];
  servicePlan?: string;
  smsUsed?: number;
  source?: string;
  timestamp?: string;
};

export const usageSchema: Schema<Usage> = s.object<Usage>({
  bytesUsed: s.optional(s.number()),
  extendedAttributes: s.optional(s.array(s.lazy(() => customFieldsSchema))),
  servicePlan: s.optional(s.string()),
  smsUsed: s.optional(s.number()),
  source: s.optional(s.string()),
  timestamp: s.optional(s.string()),
});
