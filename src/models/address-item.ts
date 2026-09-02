import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AddressItem = {
  addressLine1?: string;
  addressLine2?: string;
  city?: string;
  state?: string;
  country?: string;
  zip?: string;
  zip4?: string;
};

export const addressItemSchema: Schema<AddressItem> = s.object<AddressItem>({
  addressLine1: s.optional(s.string()),
  addressLine2: s.optional(s.string()),
  city: s.optional(s.string()),
  state: s.optional(s.string()),
  country: s.optional(s.string()),
  zip: s.optional(s.string()),
  zip4: s.optional(s.string()),
});
