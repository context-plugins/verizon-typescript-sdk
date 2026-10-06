import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** The customer address for the line's primary place of use, for line usage taxation. */
export type Address = {
  /**
   * The street address for the line's primary place of use. This must be a physical address for
   * taxation; it cannot be a P.O. box.
   */
  addressLine1: string;
  /** Optional additional street address information. */
  addressLine2?: string;
  /** The city for the line's primary place of use. */
  city: string;
  /** The state for the line's primary place of use. */
  state: string;
  /** The ZIP code for the line's primary place of use. */
  zip: string;
  /** The ZIP+4 for the line's primary place of use. */
  zip4?: string;
  /** Either “US” or “USA” for the country of the line's primary place of use. */
  country: string;
  /** A phone number where the customer can be reached. */
  phone?: string;
  /** A single letter to indicate the customer phone type. */
  phoneType?: string;
  /** An email address for the customer. */
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
