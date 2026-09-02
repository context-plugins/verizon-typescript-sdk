import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SmsNumber = {
  carrier?: string;
  number?: string;
};

export const smsNumberSchema: Schema<SmsNumber> = s.object<SmsNumber>({
  carrier: s.optional(s.string()),
  number: s.optional(s.string()),
});
