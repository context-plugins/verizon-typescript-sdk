import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Cellphonenumber = {
  number?: string;
  carrier?: string;
};

export const cellphonenumberSchema: Schema<Cellphonenumber> = s.object<Cellphonenumber>({
  number: s.optional(s.string()),
  carrier: s.optional(s.string()),
});
