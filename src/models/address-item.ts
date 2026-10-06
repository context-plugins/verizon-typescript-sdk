import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Address details. */
export type AddressItem = {
  /** Street Address. */
  addressLine1?: string;
  /** Optional address information. */
  addressLine2?: string;
  /** Name of the city. */
  city?: string;
  /** State code. */
  state?: string;
  /** Country. */
  country?: string;
  /** Five digit zipcode. */
  zip?: string;
  /** Four digit zip code. */
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
