import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { customFieldsSchema, type CustomFields } from "./custom-fields.js";

/** The daily network data usage of a single device during a specified time period. */
export type Usage = {
  /** The number of bytes that the device sent or received on the report date. */
  bytesUsed?: number;
  /** The number of mobile-originated and mobile-terminated SMS messages on the report date. */
  extendedAttributes?: CustomFields[];
  /** The list of service plans associated with the device/account. */
  servicePlan?: string;
  /** The number of SMS messages that were sent or received on the report date. */
  smsUsed?: number;
  /** The source of the information for the reported usage. */
  source?: string;
  /** The date of the recorded usage. */
  timestamp?: string;
};

export const usageSchema: Schema<Usage> = s.object<Usage>({
  bytesUsed: s.optional(s.int()),
  extendedAttributes: s.optional(s.array(s.lazy(() => customFieldsSchema))),
  servicePlan: s.optional(s.string()),
  smsUsed: s.optional(s.int()),
  source: s.optional(s.string()),
  timestamp: s.optional(s.string()),
});
