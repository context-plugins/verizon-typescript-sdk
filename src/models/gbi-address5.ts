import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type GbiAddress5 = {
  addressLine1?: string;
  city?: string;
  state?: string;
  zip?: string;
  zip4?: string;
  phone?: string;
  phoneType?: string;
  emailAddress?: string;
};

export const gbiAddress5Schema: Schema<GbiAddress5> = s.object<GbiAddress5>({
  addressLine1: s.optional(s.string()),
  city: s.optional(s.string()),
  state: s.optional(s.string()),
  zip: s.optional(s.string()),
  zip4: s.optional(s.string()),
  phone: s.optional(s.string()),
  phoneType: s.optional(s.string()),
  emailAddress: s.optional(s.string()),
  _keysMap: {
    zip4: "zip+4",
  },
});
