import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Address = {
  addressLine1: string;
  addressLine2?: string;
  city: string;
  state: string;
  zip: string;
  zip4?: string;
  country: string;
  phone?: string;
  phoneType?: string;
  emailAddress?: string;
};

export const addressSchema: Schema<Address> = s.object<Address>({
  addressLine1: s.string(),
  addressLine2: s.optional(s.string()),
  city: s.string(),
  state: s.string(),
  zip: s.string(),
  zip4: s.optional(s.string()),
  country: s.string(),
  phone: s.optional(s.string()),
  phoneType: s.optional(s.string()),
  emailAddress: s.optional(s.string()),
});
