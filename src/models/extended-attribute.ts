import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ExtendedAttribute = {
  /** The key indicates if the SMS message was to the device (MtSms) or from the device (MoSms) */
  key?: string;
  /** The number of SMS messages found */
  value?: string;
};

export const extendedAttributeSchema: Schema<ExtendedAttribute> = s.object<ExtendedAttribute>({
  key: s.optional(s.string()),
  value: s.optional(s.string()),
});
